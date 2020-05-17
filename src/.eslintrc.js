module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: "airbnb-base",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "brace-style": [
        "error",
        "stroustrup"
    ],
    "comma-dangle": [
        "error",
        "never"
    ],
    "no-unused-vars": [
        "warn"
    ],
    "no-var": [
        "off"
    ],
    "one-var": [
        "off"
    ],
    "no-restricted-syntax": 0,
    "no-await-in-loop": 0,
    "import/no-dynamic-require": "off" 
  },
};
