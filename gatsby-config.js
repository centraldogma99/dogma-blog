module.exports = {
  siteMetadata: {
    title: `Dogma blog`,
    siteUrl: `https://blog.dogmadevs.com`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `post`,
        path: `${__dirname}/posts`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `about`,
        path: `${__dirname}/src/pages/about`,
      }
    },
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: `${__dirname}/posts`,
    //   },
    // },
    "gatsby-plugin-mdx",
    `gatsby-plugin-emotion`
  ]
}