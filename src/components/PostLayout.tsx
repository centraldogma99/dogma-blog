import { graphql } from 'gatsby';
import React from 'react';
import Frame from './Frame';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import TagBtn from './TagBtn';
import { css } from "@emotion/css"
import { Divider } from "@mui/material"

const subtitle = css`
  color: #cccccc;
  margin: 0;
`

const descContainer = css`
  margin-bottom: 20px;
`

const PostLayout = ({ data }) => {
  const { body, frontmatter } = data.mdx;
  return (
    <Frame title={frontmatter.title}>
      <div className={descContainer}>
        <p className={subtitle}>{frontmatter.subtitle}</p>
        <p>{frontmatter.date} 작성</p>
        {frontmatter.tag.sort().map(tag =>
          <TagBtn tag={tag} />
        )}
      </div>
      <Divider />
      <div>
        <MDXRenderer>
          {body}
        </MDXRenderer>
      </div>
    </Frame>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        subtitle
        tag
      }
    }
  }
`

export default PostLayout;