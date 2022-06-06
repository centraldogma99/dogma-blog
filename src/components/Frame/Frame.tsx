import './Frame.css'

import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { useCallback, useContext, useRef } from 'react'

import ThemeContext from '../../contexts/ThemeContext'
import useViewport from '../../hooks/useViewport'
import {
  app,
  article,
  content,
  contentsContainerStyle,
  siteName,
  siteNameBlinkingCursor,
  title,
  topBarContainerStyle,
} from '../../styles/Frame'
import Footer from './Footer'
import GoToTopBtn from './GoToTopBtn'
import NavButtons from './NavButtons'
import NavDrawer from './NavDrawer'

const Frame = (props: { title?: string; children: any }) => {
  const { theme } = useContext(ThemeContext)
  const { width } = useViewport()
  const breakpoint = 650
  const contentsContainerRef = useRef<HTMLDivElement>(null)

  const onClickGoToTop = useCallback(() => {
    contentsContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div css={app}>
      <meta name="robots" content="all" />
      {theme && <meta name="theme-color" content={theme.colors.primary} />}
      <title>{props.title ? `${props.title} | Dogma` : `Dogma blog`}</title>
      <div css={topBarContainerStyle}>
        <Link
          to="/"
          css={css`
            text-decoration: none;
          `}
        >
          <div css={siteName}>
            Dogma_blog
            <div css={siteNameBlinkingCursor} />
          </div>
        </Link>
        {width > breakpoint ? <NavButtons /> : <NavDrawer />}
      </div>
      <div css={contentsContainerStyle} ref={contentsContainerRef}>
        <div css={content}>
          {props.title && <div css={title}>{props.title}</div>}
          <article css={article}>{props.children}</article>
        </div>
      </div>
      <Footer />

      <GoToTopBtn
        onClick={onClickGoToTop}
        scrollObjRef={contentsContainerRef}
      />
    </div>
  )
}

export default Frame
