import { css } from "@emotion/css"

export const searchInputContainer = css`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  border: 1px solid gainsboro;
  width: 240px;
  margin-bottom: 13px;
`

export const sharp = css`
  margin-left: 7px;
  margin-right: 4px;
  font-size: 20px;
`

export const searchInput = css`
  flex: 1;
  border: none;
  padding: 6px;
  font-size: 18px;
  &:focus {
    outline: none !important;
  }
`