/** @jsx jsx */
import { useRef, useCallback } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';
import './Frame.css';
import NavBtn from './NavBtn';
import { StaticImage } from 'gatsby-plugin-image';
import Footer from './Footer';
import {
  topBarContainerStyle,
  contentsContainerStyle,
  siteName,
  title,
  app,
  content,
  article,
  navStyle,
  goToTop,
  siteNameBlinkingCursor,
} from '../styles/Frame';

const Frame = (props: { title?: string; children: any }) => {
  console.log('ho');
  const contentsContainer = useRef<HTMLDivElement>(null);
  const onClickGoToTop = useCallback(() => {
    // contentsContainer.current?.scrollTo({ top: 0, behavior: 'smooth' })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [contentsContainer.current]);

  return (
    <div css={app}>
      <meta name="robots" content="all" />
      <meta name="theme-color" content="#005A9C" />
      <title>
        {props.title ? `${props.title} | Dogma` : `제목 없음 | Dogma`}
      </title>
      <div css={topBarContainerStyle}>
        <Link
          to="/"
          css={css`
            text-decoration: none;
          `}
        >
          <p css={siteName}>
            Dogma_blog<div css={siteNameBlinkingCursor}></div>
          </p>
        </Link>
        <nav css={navStyle}>
          <NavBtn to="/about">About</NavBtn>
          <NavBtn to="/tags">Tags</NavBtn>
        </nav>
      </div>
      <div css={contentsContainerStyle} ref={contentsContainer}>
        <div css={content}>
          {props.title && <div css={title}>{props.title}</div>}
          <article css={article}>{props.children}</article>
        </div>
      </div>
      <Footer />
      <StaticImage
        src="../images/up-arrow.png"
        alt="up arrow"
        css={goToTop}
        onClick={onClickGoToTop}
      />
    </div>
  );
};

export default Frame;
