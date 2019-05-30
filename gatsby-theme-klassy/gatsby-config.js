// Options:
// presetEnvOptions?: Object<any> = {}
// postcssPlugins?: Array<any> = []

module.exports = ({ presetEnvOptions = {}, postcssPlugins = [] }) => {
  console.log(presetEnvOptions, postcssPlugins)
  return {
    plugins: [
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require(`postcss-preset-env`)({ ...presetEnvOptions }),
            [...postcssPlugins]
          ]
        }
      },
    ]
  }
}
