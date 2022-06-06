import { css, Theme } from '@emotion/react'
import { Link } from 'gatsby'

import { TagButtonsContainer } from '../styles/tags'
import TagBtn from './TagBtn'

const containerStyle = (theme: Theme) => css`
  padding: 20px;
  padding-top: 12px;
  background-color: ${theme.colors.postListBackground};
  cursor: pointer;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 30%);
`

const titleStyle = (theme: Theme) => css`
  margin: 0;
  color: ${theme.colors.postList};
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 650;
`

const dateStyle = (theme: Theme) => css`
  margin: 0;
  color: ${theme.colors.postListDate};
  font-size: 15px;
`

const PostListItem = (props: {
  title: string
  date: string
  linkTo: string
  tags?: string[]
}) => {
  return (
    <div
      css={css`
        margin-bottom: 30px;
      `}
    >
      <TagButtonsContainer>
        {props.tags?.map(tag => (
          <TagBtn tag={tag} key={tag} />
        ))}
      </TagButtonsContainer>
      <Link
        to={props.linkTo}
        css={css`
          text-decoration: none;
        `}
      >
        <div css={containerStyle}>
          <p css={titleStyle}>{props.title}</p>
          <p css={dateStyle}>{props.date}</p>
        </div>
      </Link>
    </div>
  )
}

export default PostListItem
