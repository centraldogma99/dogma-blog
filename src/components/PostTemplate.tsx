import { graphql } from 'gatsby';
import React, { useEffect } from 'react';
import Frame from './Frame';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import TagBtn from './TagBtn';
import { css } from "@emotion/css"
import { Divider } from "@mui/material"
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/github.css';

const subtitle = css`
  color: #cccccc;
  margin: 0;
`

const descContainer = css`
  margin-bottom: 20px;
`

const articleBodyContainer = css`
  .hljs {
    background-color: #F5F29E;
  }

  code {
    font-family: 'Nanum Gothic Coding', monospace;
    border-radius: 5px;
    background-color: #ddd;
    color: red;
    padding: 3px;
    font-size: 14px;
    margin: 0;
  }

  pre code {
    font-family: 'Nanum Gothic Coding', monospace;
    color: black;
    font-size: 14px;
    border-radius: 10px;
    line-height: 18px;
  }

  font-size: 16px;
  line-height: 24px;
  img {
    max-width: 100%;
  }
`

const PostTemplate = ({ data }) => {
  const { body, frontmatter } = data.mdx;

  useEffect(() => {
    console.log('hi')
    hljs.highlightAll();
  }, [])

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