import React from 'react'
import { css } from '@emotion/css';

const footerStyle = css`
  position: relative;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: white;
  text-decoration: none;
  height: 30px;

  a {
    text-decoration: none;
    color : dodgerblue;
    cursor: pointer;
  }
`

const Footer = () => {
  return (
    <div className={footerStyle}>
      Source on <b><a href="https://github.com/centraldogma99/dogma-blog">Github</a></b>
    </div>
  )
}

export default Footer;