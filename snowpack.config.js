/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const rollupPluginCommonJS = require("@rollup/plugin-commonjs");
const rollupPluginNodeResolve = require("@rollup/plugin-node-resolve");
const rollupPluginBabel = require("rollup-plugin-babel");
const rollupPluginSvelte = require("rollup-plugin-svelte");
const { terser } = require("rollup-plugin-terser");
const rollupPluginTypescript = require("rollup-plugin-typescript2");

const production = process.env.NODE_ENV === "production";

module.exports = {
    rollup: {
        input: "src",
        output: {
            sourcemap: true,
            format: "iife",
        },
        plugins: [
            rollupPluginSvelte({
                dev: !production
            }),
            // rollupPluginBabel({
            //     extensions: [
            //         ".js", ".mjs", ".ts", ".html", ".svelte"
            //     ]
            // }),
            rollupPluginNodeResolve({
                browser: true,
                dedupe: false,
                extensions: [
                    ".js", ".mjs", ".ts", ".html", ".svelte", ".json"
                ]
            }),
            rollupPluginCommonJS(),
            rollupPluginTypescript(),
            terser()
        ]
    }
}