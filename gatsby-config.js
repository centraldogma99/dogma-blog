module.exports = {
  siteMetadata: {
    title: `Dogma blog`,
    siteUrl: `https://blog.dogmadevs.com`,
  },
  plugins: [
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
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: `${__dirname}/posts`,
    //   },
    // },
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
    {
      resolve: 'gatsby-plugin-git',
      options: {
        // remote name, default to origin
        remote: 'origin',

        // SHA1 revision to fetch and checkout
        revision: '7beed15dd03e03f9f9a183ed3b53f0e51f6dbbd7',

        // url of the repository to fetch
        url: `https://github.com/centraldogma99/dogma-blog-posts.git`,

        // folder in which to put the repository
        path: `${__dirname}/posts`,
      },
    },
  ],
};
