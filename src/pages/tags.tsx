import { graphql, Link } from "gatsby";
import Frame from "../components/Frame";

const TagsPage = ({ data }) => {
  const tags = data.allMdx.group.reduce((a, b) => {
    if (a.length) {
      return [...a, b.tag];
    } else {
      return [a.tag, b.tag];
    }
  })

  return (
    <Frame title="All tags">
      {tags.map(tag =>
        <Link to={`/tags/${tag}`}>
          <button>{tag}</button>
        </Link>
      )}
    </Frame>
  )
}

export const query = graphql`
  {
    allMdx {
      group(field: frontmatter___tag) {
        tag: fieldValue
      }
    }
  }
`

export default TagsPage;