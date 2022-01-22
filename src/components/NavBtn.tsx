import { Link } from "gatsby";
import React from "react"
import { css } from "@emotion/css";

const s = css`
  border: 0;
  text-decoration: none;
  background-color:gray;
  color: white;
  border-radius: 2px;
  padding: 7px;
  font-size: 17px;
  margin-right: 10px;
  height: 17px;
  display: inline-block;
  line-height: 16px;
  background-color: dodgerblue;
`

const NavBtn = (props: { to: string, children: any }) => {
  return (
    <Link to={props.to} className={s}>
      {props.children}
    </Link>
  )
}

export default NavBtn;