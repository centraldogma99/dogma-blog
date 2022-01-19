import { graphql } from "gatsby"
import React from "react"
import Frame from "./Frame"
import PostListItem from "./PostListItem"

const TagPage = ({ data, pageContext }) => {
  const nodes = data.allFile.nodes;
  return (
    <Frame title={
      pageContext.tag ?
        `# ${pageContext.tag}` :
        "모든 포스트"
    }>
      {nodes.map(node => {
        const mdx = node.childMdx;
        return (
          <PostListItem
            linkTo={`/posts/${mdx.slug}`}
            title={mdx.frontmatter.title}
            date={mdx.frontmatter.date}
            tags={mdx.frontmatter.tag.sort()}
            key={mdx.slug}
          />
        )
      })}
    </Frame>
  )
}

export const query = graphql`
  query($tag: String) {
    allFile(
      filter: {
        sourceInstanceName: {eq: "post"},
        childMdx: {frontmatter: {tag: {eq: $tag}}}
      }
      sort: {fields: childMdx___frontmatter___date, order: DESC}
    ) {
      nodes {
        childMdx {
          slug
          frontmatter {
            tag
            title
            date
          }
        }
      }
    }
  }
  
`

export default TagPage;