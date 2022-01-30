/** @jsx jsx */
// 하나의 포스트를 렌더링
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import { useEffect } from 'react';
import Frame from './Frame/Frame';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import TagBtn from './TagBtn';
import { Divider } from '@mui/material';
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/github-dark-dimmed.css';
import { TagButtonsContainer } from '../styles/tags';
import {
  subtitle,
  descContainer,
  articleBodyContainer,
  date,
} from '../styles/PostTemplate';

const PostTemplate = ({ data }) => {
  const { body, frontmatter } = data.mdx;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Frame title={frontmatter.title}>
      <div css={descContainer}>
        <p css={subtitle}>{frontmatter.subtitle}</p>
        <p css={date}>{frontmatter.date} 작성</p>
        <TagButtonsContainer>
          {frontmatter.tag.sort().map(tag => (
            <TagBtn tag={tag} key={tag} />
          ))}
        </TagButtonsContainer>
      </div>
      <Divider />
      <div css={articleBodyContainer}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Frame>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
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
`;

export default PostTemplate;
