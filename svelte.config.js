/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const sveltePreprocess = require("svelte-preprocess");

const preprocessOptions = require("./preprocess.options.json");

module.exports = {
  preprocess: sveltePreprocess(preprocessOptions)
};