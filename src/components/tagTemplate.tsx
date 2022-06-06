import { graphql } from 'gatsby'
import { useCallback, useEffect, useState } from 'react'

import { Mdx } from '../types/mdx'
import Frame from './Frame/Frame'
import PostListItem from './PostListItem'

const pageSize = 7

interface Props {
  data: {
    allFile: {
      nodes: {
        childMdx: Mdx
      }[]
    }
  }
  pageContext: {
    tag: string
  }
}

const TagPage = ({ data, pageContext }: Props) => {
  const mdxs: Mdx[] = data.allFile.nodes.map(node => node.childMdx)
  const [posts, setPosts] = useState<Mdx[]>(mdxs.slice(0, pageSize))

  const handleScroll = useCallback(() => {
    const bottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight

    if (bottom) {
      if (posts.length < mdxs.length) {
        setPosts(prev => [
          ...prev,
          ...mdxs.slice(prev.length, prev.length + pageSize),
        ])
      }
    }

    return
  }, [posts, mdxs])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <Frame title={pageContext.tag ? `# ${pageContext.tag}` : ``}>
      <div>
        {posts.map(mdx => (
          <PostListItem
            linkTo={`/posts/${mdx.slug}`}
            title={mdx.frontmatter.title}
            date={mdx.frontmatter.date}
            tags={mdx.frontmatter.tag.sort()}
            key={mdx.slug}
          />
        ))}
      </div>
    </Frame>
  )
}

export const query = graphql`
  query ($tag: String) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "post" }
        childMdx: { frontmatter: { draft: { eq: false }, tag: { eq: $tag } } }
      }
      sort: { fields: childMdx___frontmatter___date, order: DESC }
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

export default TagPage
