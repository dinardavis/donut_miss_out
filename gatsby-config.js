/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [`gatsby-plugin-smoothscroll`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/imgs/favicon.png',
      },
    },
  ],
}


