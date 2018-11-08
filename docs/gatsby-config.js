module.exports = {
  siteMetadata: {
    title: 'Space Documentation',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/page.js')
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `space`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
