import React, { useRef, useCallback } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/css';
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

const Frame = (props: { title?: string; onScroll?: any; children: any }) => {
  const contentsContainer = useRef<HTMLDivElement>(null);
  const onClickGoToTop = useCallback(() => {
    // contentsContainer.current?.scrollTo({ top: 0, behavior: 'smooth' })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [contentsContainer.current]);

  return (
    <div className={app}>
      <meta name="robots" content="all" />
      <title>
        {props.title ? `${props.title} | Dogma` : `제목 없음 | Dogma`}
      </title>
      <div className={topBarContainerStyle}>
        <Link
          to="/"
          className={css`
            text-decoration: none;
          `}
        >
          <p className={siteName}>
            Dogma_blog<div className={siteNameBlinkingCursor}></div>
          </p>
        </Link>
        <nav className={navStyle}>
          <NavBtn to="/about">About</NavBtn>
          <NavBtn to="/tags">Tags</NavBtn>
        </nav>
      </div>
      <div
        className={contentsContainerStyle}
        onScroll={props.onScroll}
        ref={contentsContainer}
      >
        <div className={content}>
          {props.title && <div className={title}>{props.title}</div>}
          <article className={article}>{props.children}</article>
        </div>
      </div>
      <Footer />
      <StaticImage
        src="../images/up-arrow.png"
        alt="up arrow"
        className={goToTop}
        onClick={onClickGoToTop}
      />
    </div>
  );
};

export default Frame;
