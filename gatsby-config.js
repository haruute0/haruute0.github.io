module.exports = {
  siteMetadata: {
    title: 'Vriyas Hartama Adesaputra',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: 'blog'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: []
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-119108098-1",
        anonymize: true
      }
    }
  ]
}
