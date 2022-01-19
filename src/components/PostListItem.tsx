import React from 'react'
import { css } from '@emotion/css';
import { Link } from 'gatsby';
import TagBtn from './TagBtn';

const containerStyle = css`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ccc;
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

const tagButtonsContainer = css`
  margin-bottom: 10px;
`

const PostListItem = (props: {
  title: string,
  date: string,
  linkTo: string,
  tags?: string[]
}) => {
  return (
    <Link
      to={props.linkTo}
      className={css`text-decoration: none;`}
    >
      <div className={containerStyle}>
        <div className={tagButtonsContainer}>
          {props.tags?.map(tag =>
            <Link to={`/tags/${tag}`}>
              <TagBtn tag={tag} />
            </Link>
          )}
        </div>
        <p className={titleStyle}>{props.title}</p>
        <p className={dateStyle}>{props.date}</p>
      </div>
    </Link>
  )
}

export default PostListItem;