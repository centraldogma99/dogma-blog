const path = require('path')

const initializePostPages = async (createPage, graphql) => {
  const template = path.resolve('./src/components/PostTemplate.tsx');
  const { data } = await graphql(`
    query {
      allFile(
        filter: {
          sourceInstanceName: {eq: "post"},
          childMdx: {frontmatter: {draft: {eq: false}}}
        }
        sort: {fields: childMdx___frontmatter___date, order: DESC}
      ) {
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
    createPage({
      path: `/posts/${node.childMdx.slug}`,
      component: template,
      context: {
        id: node.childMdx.id
      }
    })
  })
}

const initializeTagPages = async (createPage, graphql) => {
  const { data } = await graphql(`
    {
      allMdx(filter: {frontmatter: {draft: {eq: false}}}) {
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
        tag: tag,
        skip: 0
      }
    })
  })
}

const initializeMainPage = async (createPage, graphql) => {
  const pageSize = 5;
  const tagTemplate = path.resolve('./src/components/tagTemplate.tsx')
  // const { data } = await graphql(`
  //   query {
  //     allFile(
  //       filter: {
  //         sourceInstanceName: {eq: "post"},
  //         childMdx: {frontmatter: {draft: {eq: false}}}
  //       }
  //       sort: {fields: childMdx___frontmatter___date, order: DESC}
  //     ) {
  //       nodes {
  //         id
  //       }
  //     }
  //   }
  // `)

  // const numOfPages = Math.ceil(data.allFile.nodes.length / pageSize)

  // Array(numOfPages).fill(0).map((v, i) => i).map(i => {
  //   createPage({
  //     path: `/posts/${i}`,
  //     component: tagTemplate,
  //     context: {
  //       skip: i * pageSize
  //     }
  //   })
  // })

  createPage({
    path: `/`,
    component: tagTemplate,
    context: {
      skip: 0
    }
  })
}

// Main function
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  initializePostPages(createPage, graphql);
  initializeTagPages(createPage, graphql);
  initializeMainPage(createPage, graphql);
}