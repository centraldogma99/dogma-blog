// 하나의 포스트를 렌더링

import { graphql } from 'gatsby';
import React, { useEffect } from 'react';
import Frame from './Frame';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import TagBtn from './TagBtn';
import { Divider } from "@mui/material"
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/github.css';
import { TagButtonsContainer } from '../styles/tags';
import { subtitle, descContainer, articleBodyContainer } from "../styles/PostTemplate"


const PostTemplate = ({ data }) => {
  const { body, frontmatter } = data.mdx;

  useEffect(() => {
    hljs.highlightAll();
  }, [])

  return (
    <Frame title={frontmatter.title}>
      <div className={descContainer}>
        <p className={subtitle}>{frontmatter.subtitle}</p>
        <p>{frontmatter.date} 작성</p>
        <TagButtonsContainer>
          {frontmatter.tag.sort().map(tag =>
            <TagBtn tag={tag} key={tag} />
          )}
        </TagButtonsContainer>
      </div>
      <Divider />
      <div className={articleBodyContainer}>
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
        draft
      }
    }
  }
`

export default PostTemplate;