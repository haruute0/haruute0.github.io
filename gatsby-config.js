module.exports = {
  siteMetadata: {
    title: 'Vriyas Hartama A',
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: '@haruute'
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
