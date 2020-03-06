/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const autoPreprocess = require("svelte-preprocess");

const preprocessOptions = require("./preprocess.options.json");

module.exports = [
    autoPreprocess(preprocessOptions)
]