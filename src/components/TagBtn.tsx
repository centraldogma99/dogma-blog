import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/css"

const btnStyle = css`
  border: 0;
  background-color: dodgerblue;
  color: white;
  padding: 5px;
  margin-right: 5px;
`

const TagBtn = (props: { tag: string }) => {
  return (
    <Link to={`/tags/${props.tag}`}>
      <button className={btnStyle}>
        {`# ${props.tag}`}
      </button>
    </Link>
  )
}

export default TagBtn;