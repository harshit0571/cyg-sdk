import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default [
  // ES Module build
  {
    input: "src/index.js",
    output: {
      file: "dist/cyg.esm.js",
      format: "es",
    },
    plugins: [json(), resolve(), commonjs()],
  },
  // CommonJS build
  {
    input: "src/index.js",
    output: {
      file: "dist/cyg.cjs.js",
      format: "cjs",
    },
    plugins: [json(), resolve(), commonjs()],
  },
  // UMD build
  {
    input: "src/index.js",
    output: {
      file: "dist/cyg.umd.js",
      format: "umd",
      name: "Cyg",
      exports: "default",
    },
    plugins: [json(), resolve(), commonjs()],
  },
];
