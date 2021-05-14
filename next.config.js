const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

const plugins = [[withOptimizedImages]];

module.exports = withPlugins([...plugins]);
