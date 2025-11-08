import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  platform: "node", // server runtime
  format: ["esm"], // output ESM (Node 20+ friendly)
  outDir: "dist",
  sourcemap: true,
  // dts: false              // keep off for apps (no need for .d.ts)
});
