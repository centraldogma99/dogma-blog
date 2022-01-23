import React, { useCallback } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/css'

const style = css`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 40px;
  height: 40px;
`

const GoToTopBtn = (props: { obj: HTMLDivElement | null }) => {
  console.log(props.obj)
  const onClick = useCallback(() => {
    props.obj?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [props.obj])

  return (
    <StaticImage
      src="../images/up-arrow.png"
      alt="up arrow"
      onClick={onClick}
      className={style}
    />
  )
}

export default GoToTopBtn;