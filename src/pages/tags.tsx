import { graphql } from 'gatsby';
import Frame from '../components/Frame';
import TagBtn from '../components/TagBtn';
import React, { useState } from 'react';
import useTagSearch from '../hooks/useTagSearch';
import {
  searchInputContainer,
  searchInput,
  sharp,
  TagButtonsContainer,
} from '../styles/tags';

const TagsPage = ({ data }) => {
  const [tagInput, setTagInput] = useState<string>('');

  const tags = data.allMdx.group.reduce((a, b) => {
    if (a.length) {
      return [...a, b.tag];
    } else {
      return [a.tag, b.tag];
    }
  });

  const { matchingTags } = useTagSearch(tagInput, tags);

  return (
    <Frame title="태그로 검색하기">
      <div className={searchInputContainer}>
        <span className={sharp}>#</span>
        <input
          type="text"
          value={tagInput}
          onChange={e => setTagInput(e.target.value)}
          placeholder="태그 검색"
          className={searchInput}
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
  );
};

export const query = graphql`
  {
    allMdx(filter: { frontmatter: { draft: { eq: false } } }) {
      group(field: frontmatter___tag) {
        tag: fieldValue
      }
    }
  }
`;

export default TagsPage;
