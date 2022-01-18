const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve('./src/pages/posts/template.tsx');

  const { data } = await graphql(`
    query {
      allFile(filter: {sourceInstanceName: {eq: "post"}}) {
        nodes {
          childMdx {
            id
            slug
          }
        }
      }
    }
  `)

  data.allFile.nodes.forEach(node => {
    console.log(node)
    createPage({
      path: `/posts/${node.childMdx.slug}`,
      component: template,
      context: {
        id: node.childMdx.id
      }
    })
  })

}