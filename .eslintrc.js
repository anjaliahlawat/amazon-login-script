const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 9,
  },
  env: {
    node: true,
    jest: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  rules: {
    "import/extensions": [OFF, "never"],
    "no-underscore-dangle": OFF,
    "prettier/prettier": ERROR,
    "max-len": [WARNING, { code: 100 }],
    "no-console": WARNING,
    "no-await-in-loop": OFF,
    "class-methods-use-this": OFF,
    "no-unused-vars": WARNING,
  },
  globals: {
    step: true,
    gauge: true,
    beforeScenario: true,
    afterScenario: true,
    beforeStep: true,
    beforeSpec: true,
    afterSpec: true,
    beforeSuite: true,
    afterSuite: true,
  },
};
