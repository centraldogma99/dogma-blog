import React from 'react'
import { css } from '@emotion/css';

const containerStyle = css`
  border: 1px solid black;
  padding: 20px;
  margin-bottom: 20px;
`

const titleStyle = css`
  margin: 0;
  font-size: 20px;
`

const dateStyle = css`
  margin: 0;
  font-size: 15px;
`

const PostListItem = (props: { title: string, date: string }) => {
  return (
    <div className={containerStyle}>
      <p className={titleStyle}>{props.title}</p>
      <p className={dateStyle}>{props.date}</p>
    </div>
  )
}

export default PostListItem;