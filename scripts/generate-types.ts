import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import { compile } from "json-schema-to-typescript";

/**
 * Output folder for generated TypeScript types
 */
const outputDir = path.resolve(__dirname, "../src/generated");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

/**
 * Wiki base URL
 */
const wikiBase = "https://minecraft.fandom.com";

/**
 * Helper to infer JSON Schema from data
 */
function inferSchema(data: any): any {
  if (data === null) return { type: "null" };
  
  if (Array.isArray(data)) {
    // If array is empty, we don't know the type.
    if (data.length === 0) return { type: "array" };
    
    // Ideally we should merge schemas of all items, but taking the first one is a good start.
    const items = inferSchema(data[0]);
    return { type: "array", items };
  }
  
  if (typeof data === "object") {
    const keys = Object.keys(data);
    
    // Heuristic: if keys are all numeric (like IDs), treat as a dictionary/record
    const isNumericMap = keys.length > 0 && keys.every(k => !isNaN(Number(k)));
    
    if (isNumericMap) {
      // Infer schema from the first value
      const valueSchema = inferSchema(data[keys[0]]);
      return {
        type: "object",
        additionalProperties: valueSchema,
        // We don't list properties explicitly to force it to be a Record<string, T>
      };
    }

    const properties: any = {};
    // We don't mark anything as required because we are inferring from a single sample
    
    for (const key in data) {
      properties[key] = inferSchema(data[key]);
    }
    return { type: "object", properties };
  }
  
  if (typeof data === "string") return { type: "string" };
  if (typeof data === "number") return { type: "number" };
  if (typeof data === "boolean") return { type: "boolean" };
  
  return {};
}

/**
 * Endpoints to generate types from.
 */
const schemaEndpoints = [
  {
    name: "MWParseResponse",
    // Using Action API as REST API seems unavailable or 404s
    url: `${wikiBase}/api.php?action=parse&page=Diamond&format=json`,
  },
  {
    name: "MWQuerySearchResponse",
    // Using Action API
    url: `${wikiBase}/api.php?action=query&list=search&srsearch=test&format=json`,
  },
  {
    name: "MWQuerySiteInfoResponse",
    url: `${wikiBase}/api.php?action=query&meta=siteinfo&siprop=general|namespaces|statistics&format=json`,
  },
  // Fandom-specific
  {
    name: "FandomArticlesDetailsResponse",
    url: `${wikiBase}/api/v1/Articles/Details?ids=1`,
  },
];

/**
 * Main generator function
 */
async function generate() {
  for (const endpoint of schemaEndpoints) {
    try {
      console.log(`Fetching ${endpoint.name}...`);
      const res = await fetch(endpoint.url);
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
      const json = await res.json();

      // Infer schema from data because the APIs return data, not schemas
      const schema = inferSchema(json);

      // @ts-ignore
      const ts = await compile(schema, endpoint.name, {
        bannerComment: "// This file is auto-generated from JSON data. Do not edit manually.",
        style: { singleQuote: true },
      });

      const outPath = path.join(outputDir, `${endpoint.name}.ts`);
      fs.writeFileSync(outPath, ts);
      console.log(`Generated: ${outPath}`);
    } catch (err) {
      console.error(`Failed to generate ${endpoint.name}:`, err);
    }
  }
}

generate().catch(console.error);
