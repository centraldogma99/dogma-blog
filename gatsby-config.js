module.exports = {
  siteMetadata: {
    title: `Dogma blog`,
    siteUrl: `https://blog.dogmadevs.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `post`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `about`,
        path: `${__dirname}/src/pages/about`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `postImage`,
        path: `${__dirname}/src/images/post`,
      },
    },
    'gatsby-plugin-sharp',
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://blog.dogmadevs.com',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-image`,
  ],
};
