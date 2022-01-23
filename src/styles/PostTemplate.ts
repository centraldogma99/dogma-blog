import { css } from "@emotion/css"

export const subtitle = css`
  color: #cccccc;
  margin: 0;
`

export const descContainer = css`
  margin-bottom: 20px;
`

export const articleBodyContainer = css`
  .hljs {
    background-color: #fffdd1;
  }

  code {
    font-family: 'Nanum Gothic Coding', monospace;
    border-radius: 5px;
    background-color: #ddd;
    color: red;
    padding: 3px;
    font-size: 14px;
    margin: 0;
  }

  pre code {
    font-family: 'Nanum Gothic Coding', monospace;
    color: black;
    font-size: 14px;
    border-radius: 10px;
    line-height: 18px;
  }

  font-size: 16px;
  line-height: 24px;
  img {
    max-width: 100%;
  }
`