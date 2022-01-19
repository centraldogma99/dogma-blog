import { graphql, Link } from "gatsby"
import React from "react"
import Frame from "./Frame"
import PostListItem from "./PostListItem"

const TagPage = ({ data, pageContext }) => {
  const nodes = data.allFile.nodes;
  return (
    <Frame title={`Posts tagged ${pageContext.tag}`}>
      <ul>
        {nodes.map(node => {
          const mdx = node.childMdx;
          return (
            <div key={mdx.slug}>
              <Link to={`/posts/${mdx.slug}`} key={mdx.slug}>
                <PostListItem
                  title={mdx.frontmatter.title}
                  date={mdx.frontmatter.date}
                />
              </Link>
            </div>
          )
        })}
      </ul>
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
      sort: {fields: childMdx___frontmatter___date}
    ) {
      nodes {
        childMdx {
          slug
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
  
`

export default TagPage;