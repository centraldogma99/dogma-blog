import { graphql } from 'gatsby';
import { useState, useCallback, useEffect } from 'react';
import Frame from './Frame';
import PostListItem from './PostListItem';
import { mdx } from '../types/allMdx';

const pageSize = 5;

const TagPage = ({ data, pageContext }) => {
  const mdxs: mdx[] = data.allFile.nodes.map(node => node.childMdx);
  const [posts, setPosts] = useState<mdx[]>(mdxs.slice(0, pageSize));

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onScroll = useCallback(
    e => {
      const bottom =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

      if (bottom) {
        if (posts.length < mdxs.length) {
          setPosts(prev => [
            ...prev,
            ...mdxs.slice(prev.length, prev.length + pageSize),
          ]);
        } else {
          return;
        }
      } else {
        return;
      }
    },
    [posts, mdxs, pageSize],
  );

  return (
    <Frame title={pageContext.tag ? `# ${pageContext.tag}` : `포스트 목록`}>
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
  );
};

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
`;

export default TagPage;
