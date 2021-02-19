// Create React App Configuration Override (without ejecting)
// https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md

const path = require('path')

module.exports = {
  webpack: {
    alias: {
      react: path.resolve(__dirname, './src'),
      react: path.resolve(__dirname, './node_modules'),
      react: path.resolve(__dirname, './node_modules/react'),
    },
  },
}
