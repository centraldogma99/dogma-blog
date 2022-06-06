import { css } from '@emotion/react'
import { Theme } from '@emotion/react'

export const subtitle = css`
  color: #cccccc;
  margin: 0;
`

export const descContainer = css`
  margin-bottom: 20px;
`

export const date = (theme: Theme) => css`
  color: ${theme.colors.text};
`

export const articleBodyContainer = (theme: Theme) => css`
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.text};

  .hljs {
    background-color: ${theme.colors.preCode};
  }

  a {
    color: ${theme.colors.primary};
  }

  h1 {
    margin-top: 50px;
    margin-bottom: 40px;
    font-size: 1.7em;
  }

  h2 {
    margin-top: 55px;
    margin-bottom: 30px;
  }

  h3 {
    margin-top: 35px;
    margin-bottom: 20px;
  }

  h1,
  h2,
  h3 {
    color: ${theme.colors.primary};
  }

  code {
    font-family: 'Menlo', monospace;
    border-radius: 5px;
    background-color: #ddd;
    color: red;
    padding: 3px;
    font-size: 14px;
    margin: 0;
  }

  pre code {
    font-family: 'Menlo', monospace;
    color: ${theme.colors.codeText};
    font-size: 14px;
    border-radius: 10px;
    line-height: 18px;
    padding: 20px;
  }

  img {
    max-width: 100%;
  }

  blockquote {
    background-color: ${theme.colors.blockquote};
    border-radius: 10px;
    padding: 20px;
    margin-inline-start: 20px;
    margin-inline-end: 20px;

    > :first-of-type {
      margin-top: 0;
    }

    > h3:first-of-type {
      margin-bottom: 19px;
    }

    > :last-child {
      margin-bottom: 0;
    }
  }

  > :first-child {
    margin-top: 19px;
  }
`
