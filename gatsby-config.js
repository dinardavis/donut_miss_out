/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Donut Miss It!`,
    description: `Donut Miss It is more than just a donut shop. Our stores are beloved parts of each of the communities we serve.`,
    author: `@dinardavis`,
    siteUrl: `https://dinardavis.github.io/donut_miss_out/`,
  },
  pathPrefix: "/donut_miss_out",
  plugins: [`gatsby-plugin-smoothscroll`, 'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/imgs/favicon.png',
      },
    },
  ],
}


