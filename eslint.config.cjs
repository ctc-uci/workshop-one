import js from "@eslint/js";
import globals from "globals";

const config = {
  ignores: ["dist"],
  extends: [js.configs.recommended],
  files: ["**/*.{js,jsx}"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  rules: {
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    eqeqeq: "error",
  },
};

export default config;
