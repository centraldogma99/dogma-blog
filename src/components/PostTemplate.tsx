// 하나의 포스트를 렌더링
import 'highlight.js/styles/github-dark-dimmed.css'

import { Divider } from '@mui/material'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import hljs from 'highlight.js/lib/common'
import { useEffect } from 'react'

import {
  articleBodyContainer,
  date,
  descContainer,
  subtitle,
} from '../styles/PostTemplate'
import { TagButtonsContainer } from '../styles/tags'
import Frame from './Frame/Frame'
import TagBtn from './TagBtn'

interface Props {
  data: {
    mdx: {
      body: string
      frontmatter: {
        tag: string[]
        date: string
        draft: boolean
        subtitle: string
        title: string
      }
    }
  }
}

const PostTemplate = ({ data }: Props) => {
  const { body, frontmatter } = data.mdx

  useEffect(() => {
    hljs.highlightAll()
  }, [])

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
  )
}

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
`

export default PostTemplate
