var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    // ...
    plugins: [
        new ManifestPlugin()
    ]
};

// Inside of webpack.config.js:
const {GenerateSW} = require('workbox-webpack-plugin');

module.exports = {
    // Other webpack config...
    plugins: [
        // Other plugins...
        new GenerateSW()
    ]
};
