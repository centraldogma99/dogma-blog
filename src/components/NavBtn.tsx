import { Link } from "gatsby";
import React from "react"
import { css } from "@emotion/css";

const s = css`
  border: 0;
  background-color:gray;
  color: white;
  border-radius: 2px;
  padding: 6px;
  font-size: 17px;
  margin-right: 10px;
`

const NavBtn = (props: { to: string, children: any }) => {
  return (
    <Link to={props.to}>
      <button className={s}>
        {props.children}
      </button>
    </Link>
  )
}

export default NavBtn;