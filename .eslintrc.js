var OFF = 0;
var WARN = 1;
var ERROR = 2;

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
    },
    "extends": "airbnb",
    "parser": 'babel-eslint',
      "parserOptions": {
        "sourceType": 'module',
        "allowImportExportEverywhere": true,
    },
    "rules": {
        "react/jsx-filename-extension": [WARN, { "extensions": [".js", ".jsx"] }],
        "react/forbid-prop-types": OFF,
        "dot-notation": OFF,
        "react/no-array-index-key": OFF,
        "react/require-default-props": OFF,
    }
};