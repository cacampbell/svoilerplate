/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
    "comments": false,
    "presets": [
        ["@babel/preset-env", {
            useBuiltIns: "usage",
            corejs: 3,
            modules: false
        }],
        "@babel/preset-typescript"
    ],
    "plugins": [
        ["babel-plugin-module-resolver", {
            "root": ["."]
        }],
        "babel-plugin-add-import-extension",
        [
        "snowpack/assets/babel-plugin.js", {
            "optionalExtensions": true 
        }],
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-syntax-dynamic-import",
  ]
}