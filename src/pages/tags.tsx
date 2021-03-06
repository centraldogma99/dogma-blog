import { graphql } from 'gatsby'
import { useState } from 'react'

import Frame from '../components/Frame/Frame'
import TagBtn from '../components/TagBtn'
import useTagSearch from '../hooks/useTagSearch'
import {
  searchInput,
  searchInputContainer,
  sharp,
  TagButtonsContainer,
} from '../styles/tags'

interface Props {
  data: {
    allMdx: {
      group: { tag: string }[]
    }
  }
}

const TagsPage = ({ data }: Props) => {
  const [tagInput, setTagInput] = useState<string>('')

  const tags = data.allMdx.group.map(v => v.tag)

  const { matchingTags } = useTagSearch(tagInput, tags)

  return (
    <Frame title="태그로 검색하기">
      <div css={searchInputContainer}>
        <div css={sharp}>#</div>
        <input
          type="text"
          value={tagInput}
          onChange={e => setTagInput(e.target.value)}
          placeholder="태그 검색"
          css={searchInput}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>
      <TagButtonsContainer>
        {matchingTags.map(tag => (
          <TagBtn tag={tag} key={tag} />
        ))}
      </TagButtonsContainer>
    </Frame>
  )
}

export const query = graphql`
  {
    allMdx(filter: { frontmatter: { draft: { eq: false } } }) {
      group(field: frontmatter___tag) {
        tag: fieldValue
      }
    }
  }
`

export default TagsPage
