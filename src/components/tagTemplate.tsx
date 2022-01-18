import { graphql, Link } from "gatsby"
import React from "react"
import Frame from "./Frame"

const TagPage = ({ data, pageContext }) => {
  const nodes = data.allFile.nodes;
  return (
    <Frame title={`Posts tagged ${pageContext.tag}`}>
      <ul>
        {nodes.map(node => {
          const mdx = node.childMdx;
          return (
            <li>
              <Link to={`/posts/${mdx.slug}`} key={mdx.slug}>
                <div>
                  <h2>{mdx.frontmatter.title}</h2>
                  <h3>Posted at {mdx.frontmatter.date}</h3>
                </div>
              </Link>
            </li>
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