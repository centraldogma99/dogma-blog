import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/css"

const title = css`
  font-size: 30px;
  font-weight: bold;
`

const app = css`
  font-family: Noto Sans KR;
`

const Frame = (props: { title?: string, children: any }) => {
  return (
    <main className={app}>
      <title>{props.title ? `${props.title} | Dogma` : `No Title | Dogma`}</title>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </nav>
      {props.title && <div className={title}>
        {props.title}
      </div>}
      {props.children}
    </main>
  )
}

export default Frame;