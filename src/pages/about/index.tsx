/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import Frame from '../../components/Frame/Frame';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { articleBodyContainer } from '../../styles/PostTemplate';

const AboutPage = ({ data }) => {
  const body = data.mdx.body;
  return (
    <Frame title="About Me">
      <div css={articleBodyContainer}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Frame>
  );
};

export const query = graphql`
  query {
    mdx(slug: { eq: "about" }) {
      body
    }
  }
`;

export default AboutPage;
