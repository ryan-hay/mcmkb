var path = require('path')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  // basePath and assetPrefix required when a custom domain isnt used with GitHub Pages
  basePath: '/mcmkb',
  assetPrefix: '/mcmkb/',
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'node_modules')],
  // },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      },
    ],
  ],
  nextConfig,
)
