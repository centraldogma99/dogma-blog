import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Frame from '../../components/Frame/Frame'
import { articleBodyContainer } from '../../styles/PostTemplate'
import { Mdx } from '../../types/mdx'

interface Props {
  data: {
    mdx: Mdx
  }
}

const AboutPage = ({ data }: Props) => {
  const body = data.mdx.body

  return (
    <Frame title="About Me">
      <div css={articleBodyContainer}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Frame>
  )
}

export const query = graphql`
  query {
    mdx(slug: { eq: "about" }) {
      body
    }
  }
`

export default AboutPage
