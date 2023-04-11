const JavaScriptObfuscator = require("webpack-obfuscator");
module.exports = (config, options) => {
    if (config.mode === "production") {
        config.plugins.push(
            new JavaScriptObfuscator(
                {
                    rotateStringArray: true
                },
                ["exclude_bundle.js"]
            )
        );
    }
};
