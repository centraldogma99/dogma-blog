import React from 'react'
import { css } from '@emotion/css';
import { Link } from 'gatsby';
import TagBtn from './TagBtn';
import { TagButtonsContainer } from '../styles/tags';

const containerStyle = css`
  padding: 20px;
  padding-top: 12px;
  margin-bottom: 20px;
  background-color: #ccc;
  cursor: pointer;
`

const titleStyle = css`
  margin: 0;
  color: black;
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 650;
`

const dateStyle = css`
  margin: 0;
  color: #222222;
  font-size: 15px;
`

const PostListItem = (props: {
  title: string,
  date: string,
  linkTo: string,
  tags?: string[]
}) => {
  return (
    <div className={css`margin-bottom: 30px;`}>
      <TagButtonsContainer>
        {props.tags?.map(tag =>
          <TagBtn tag={tag} key={tag} />
        )}
      </TagButtonsContainer>
      <Link
        to={props.linkTo}
        className={css`text-decoration: none;`}
      >
        <div className={containerStyle}>
          <p className={titleStyle}>{props.title}</p>
          <p className={dateStyle}>{props.date}</p>
        </div>
      </Link>
    </div>
  )
}

export default PostListItem;