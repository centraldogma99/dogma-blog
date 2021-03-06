import { css, Theme } from '@emotion/react'

export const topBarContainerStyle = css`
  padding: 10px 5%;
  height: 50px;
  width: calc(100% - 10%);
  background-color: #333333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const contentsContainerStyle = (theme: Theme) => css`
  background-color: ${theme.colors.globalBackground};
  height: calc(100vh - 70px);
  overflow-y: scroll;
`

export const siteName = (theme: Theme) => css`
  margin: 0;
  font-size: 30px;
  color: ${theme.colors.title};
  font-family: 'Menlo', monospace;
  display: flex;
  flex-direction: row;
`

export const siteNameBlinkingCursor = (theme: Theme) => css`
  animation: blinker 1s linear infinite;
  background-color: ${theme.colors.title};
  width: 20px;
  margin-left: 6px;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`

export const title = (theme: Theme) => css`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${theme.colors.text};
`

export const app = (theme: Theme) => css`
  background-color: ${theme.colors.globalBackground};
  overflow: hidden;
  min-width: 375px;
`

export const content = css`
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  margin-bottom: 50px;
`

export const article = css``

export const navStyle = css``

export const goToTop = css`
  position: fixed;
  right: 20px;
  bottom: 50px;
  width: 25px;
  height: 25px;
`
