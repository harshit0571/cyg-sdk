import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  // ES Module build
  {
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "cyg.esm.js",
      library: {
        type: "module",
      },
    },
    experiments: {
      outputModule: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.json$/,
          type: "json",
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    mode: "production",
  },
  // CommonJS build
  {
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "cyg.cjs.js",
      library: {
        type: "commonjs2",
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.json$/,
          type: "json",
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    mode: "production",
  },
  // UMD build
  {
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "cyg.umd.js",
      library: {
        name: "Cyg",
        type: "umd",
        umdNamedDefine: true,
        export: "default",
      },
      globalObject: "this",
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.json$/,
          type: "json",
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    mode: "production",
  },
];
