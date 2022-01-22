import { graphql } from "gatsby"
import React from "react"
import Frame from "./Frame"
import PostListItem from "./PostListItem"

const pageSize = 5;

const TagPage = ({ data, pageContext }) => {
  const nodes = data.allFile.nodes;
  const skip = pageContext.skip;
  return (
    <Frame title={
      pageContext.tag ?
        `# ${pageContext.tag}` :
        `포스트 목록`
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
  query($tag: String, $skip: Int) {
    allFile(
      filter: {
        sourceInstanceName: {eq: "post"},
        childMdx: {frontmatter: {draft: {eq: false}, tag: {eq: $tag}}}
      }
      sort: {fields: childMdx___frontmatter___date, order: DESC}
      limit: 5
      skip: $skip
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