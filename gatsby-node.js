const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve('./src/components/PostLayout.tsx');

  (async () => {
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
  })()

  const { data } = await graphql(`
    {
      allMdx {
        group(field: frontmatter___tag) {
          tag: fieldValue
        }
      }
    }
  `)
  const tags = data.allMdx.group.reduce((a, b) => {
    if (a.length) {
      return [...a, b.tag];
    } else {
      return [a.tag, b.tag];
    }
  })

  const tagTemplate = path.resolve('./src/components/tagTemplate.tsx')

  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag}`,
      component: tagTemplate,
      context: {
        tag: tag
      }
    })
  })
}