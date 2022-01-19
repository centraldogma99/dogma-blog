import { graphql, Link } from "gatsby"
import React from "react"
import Frame from "../components/Frame"
import { css } from "@emotion/css"
import PostListItem from "../components/PostListItem"

const PostPage = ({ data }) => {
  const nodes = data.allFile.nodes;
  return (
    <Frame title="포스트 목록">
      {nodes.map(node => {
        const mdx = node.childMdx;
        return (
          <div key={mdx.slug}>
            <Link
              to={`/posts/${mdx.slug}`}
              className={css`text-decoration: none;`}
            >
              <PostListItem
                title={mdx.frontmatter.title}
                date={mdx.frontmatter.date}
              />
            </Link>
          </div>
        )
      })}
    </Frame>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "post"}},
    sort: {fields: childrenMdx___frontmatter___date, order: DESC}) {
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