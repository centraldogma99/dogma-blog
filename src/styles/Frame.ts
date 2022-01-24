import { css } from "@emotion/css"

export const topBarContainerStyle = css`
  padding: 10px 20px;
  height: 50px;
  width: calc(100% - 40px);
  background-color: #333333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const contentsContainerStyle = css`
  height: calc(100% - 70px);
  overflow-y: scroll;
`

export const siteName = css`
  margin: 0;
  font-size: 30px;
  color: #ffffff;
`

export const title = css`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const app = css`
  overflow: hidden;
  min-width: 460px;
`

export const content = css`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`

export const article = css`
`

export const navStyle = css`
`

export const goToTop = css`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 40px;
  height: 40px;
`