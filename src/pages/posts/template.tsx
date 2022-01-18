import { graphql } from 'gatsby';
import React from 'react';
import Frame from '../../components/Frame';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const PostLayout = ({ data }) => {
  const { body, frontmatter } = data.mdx;
  return (
    <Frame title={frontmatter.title}>
      <h3>Posted at {frontmatter.date}</h3>
      <MDXRenderer>
        {body}
      </MDXRenderer>
    </Frame>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
    }
  }
`

export default PostLayout;