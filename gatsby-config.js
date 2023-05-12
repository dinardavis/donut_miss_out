/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/donut_miss_out",
  plugins: [`gatsby-plugin-smoothscroll`, 'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/imgs/favicon.png',
      },
    },
  ],
  siteMetadata: {
    title: `Using Gatsby Head`,
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@gatsbyjs`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.yourdomain.tld`,
  },
}


