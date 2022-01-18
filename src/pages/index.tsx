import { graphql, Link } from "gatsby"
import React from "react"
import Frame from "../components/Frame"
import { css } from "@emotion/css"

const liWithoutDots = css`
  list-style-type: none;
`

const PostPage = ({ data }) => {
  const nodes = data.allFile.nodes;
  return (
    <Frame title="My Posts">
      <ul>
        {nodes.map(node => {
          const mdx = node.childMdx;
          return (
            <li className={liWithoutDots}>
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
  query {
    allFile(filter: {sourceInstanceName: {eq: "post"}},
    sort: {fields: childrenMdx___frontmatter___date, order: ASC}) {
      nodes {
        childMdx {
          id
          slug
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
          }
        }
      }
    }
  }
`

export default PostPage;