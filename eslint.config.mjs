import globals from "globals";
import eslintJsPkg from "@eslint/js";

const { configs: pluginJsConfigs } = eslintJsPkg;

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["dist/**", "*.config.js"], // <- top-level ignore
  },

  {
    // All JS files in your source
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
  },

  {
    // Node-specific config for config files
    files: ["*.config.js", "webpack.config.js"],
    languageOptions: {
      globals: globals.node,
      sourceType: "script",
    },
  },

  // Recommended JS rules
  pluginJsConfigs.recommended,
];
