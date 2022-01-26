/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import Frame from '../../components/Frame';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const AboutPage = ({ data }) => {
  const body = data.mdx.body;
  return (
    <Frame title="About Me">
      <MDXRenderer>{body}</MDXRenderer>
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
