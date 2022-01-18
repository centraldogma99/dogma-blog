import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/css"
import "./Frame.css"
import NavBtn from "./NavBtn"

const siteName = css`
  margin: 0;
  font-size: 30px;
  margin-bottom: 20px;
`

const title = css`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`

const app = css`
  height: 100vh;
`

const content = css`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
  padding: 20px;
`

const article = css`
  color: #dddddd;
`

const Frame = (props: { title?: string, children: any }) => {
  return (
    <div className={app}>
      <title>{props.title ? `${props.title} | Dogma` : `No Title | Dogma`}</title>
      <div className={css`padding: 20px;`}>
        <p className={siteName}>Dogma's blog</p>
        <nav>
          <NavBtn to="/about">About</NavBtn>
          <NavBtn to="/">Home</NavBtn>
          <NavBtn to="/tags">Tags</NavBtn>
        </nav>
      </div>

      <div className={content}>
        {props.title && <div className={title}>
          {props.title}
        </div>}
        <div className={article}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Frame;