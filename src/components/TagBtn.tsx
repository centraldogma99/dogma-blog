import React from "react"
import { Link } from "gatsby"

const TagBtn = (props: { tag: string }) => {
  return (
    <Link to={`/tags/${props.tag}`}>
      <button>
        {`# ${props.tag}`}
      </button>
    </Link>
  )
}

export default TagBtn;