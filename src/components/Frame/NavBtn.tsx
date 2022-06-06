import { css, Theme } from '@emotion/react'
import { Link } from 'gatsby'

export const navButtonStyle = (theme: Theme) => css`
  border: 0;
  margin: 0;
  text-decoration: none;
  color: ${theme.colors.secondary};
  border-radius: 2px;
  padding: 7px;
  font-size: 17px;
  margin-right: 10px;
  height: 17px;
  display: inline-block;
  line-height: 16px;
  background-color: ${theme.colors.primary};
  cursor: pointer;

  &:hover {
    background-color: #222;
    color: white;
  }
`

const NavBtn = (props: { to: string; children: any }) => {
  return (
    <Link to={props.to} css={navButtonStyle}>
      {props.children}
    </Link>
  )
}

export default NavBtn
