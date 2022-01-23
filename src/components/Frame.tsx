import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/css"
import "./Frame.css"
import NavBtn from "./NavBtn"

const topBarContainerStyle = css`
  padding: 10px 20px;
  height: 50px;
  width: calc(100% - 40px);
  background-color: #333333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const contentsContainerStyle = css`
  height: calc(100vh - 125px);
  overflow-y: scroll;
`

const siteName = css`
  margin: 0;
  font-size: 30px;
  color: #ffffff;
`

const title = css`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`

const app = css`
  overflow: hidden;
  min-width: 460px;
`

const content = css`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`

const article = css`
`

const navStyle = css`
`

const Frame = (props: { title?: string, onScroll?: any, children: any }) => {
  return (
    <div className={app} >
      <title>{props.title ? `${props.title} | Dogma` : `No Title | Dogma`}</title>
      <div className={topBarContainerStyle}>
        <p className={siteName}>Dogma's blog</p>
        <nav className={navStyle}>
          <NavBtn to="/about">About</NavBtn>
          <NavBtn to="/">Home</NavBtn>
          <NavBtn to="/tags">Tags</NavBtn>
        </nav>
      </div>
      <div className={contentsContainerStyle} onScroll={props.onScroll}>
        <div className={content}>
          {props.title && <div className={title}>
            {props.title}
          </div>}
          <div className={article} >
            {props.children}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Frame;