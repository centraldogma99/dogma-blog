import { graphql } from "gatsby"
import React, { useState, useCallback } from "react"
import Frame from "./Frame"
import PostListItem from "./PostListItem"
import { mdx } from "../types/allMdx"
import { css } from "@emotion/css"

const pageSize = 5;

const TagPage = ({ data, pageContext }) => {
  const mdxs: mdx[] = data.allFile.nodes.map(node => node.childMdx);
  const [posts, setPosts] = useState<mdx[]>(mdxs.slice(0, pageSize))

  const onScroll = useCallback((e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom) {
      if (posts.length < mdxs.length) {
        setPosts(prev => [...prev, ...mdxs.slice(prev.length, prev.length + pageSize)])
      } else {
        return;
      }
    } else {
      return;
    }
  }, [posts, mdxs, pageSize])

  return (
    <Frame
      title={
        pageContext.tag ?
          `# ${pageContext.tag}` :
          `포스트 목록`
      }
      onScroll={onScroll}
    >
      <div>
        {posts.map(mdx =>
          <PostListItem
            linkTo={`/posts/${mdx.slug}`}
            title={mdx.frontmatter.title}
            date={mdx.frontmatter.date}
            tags={mdx.frontmatter.tag.sort()}
            key={mdx.slug}
          />
        )}
      </div>
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