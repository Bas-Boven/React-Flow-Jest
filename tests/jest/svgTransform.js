// Transformer for SVG, because Jest doesn't know how to handle SVG without it
module.exports = {
    process() {
        return 'module.exports = {};';
    },
    getCacheKey() {
        // The output is always the same.
        return 'svgTransform';
    },
};