/** @jsx jsx */
import { useRef, useCallback, useState } from 'react';
import { Link } from 'gatsby';
import { css, jsx, useTheme } from '@emotion/react';
import './Frame.css';
import ThemeContext from '../contexts/ThemeContext';
import themes from '../styles/themes';
import NavBtn, { navButtonStyle } from './NavBtn';
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
import { useContext } from 'react';

const Frame = (props: { title?: string; children: any }) => {
  const theme = useTheme();
  const { setTheme } = useContext(ThemeContext);
  const contentsContainer = useRef<HTMLDivElement>(null);

  const onClickGoToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const onClickTheme = useCallback(() => {
    setTheme(prev => {
      if (prev === themes.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }, []);

  return (
    <div css={app}>
      <meta name="robots" content="all" />
      <meta name="theme-color" content={theme?.colors.primary} />
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
            Dogma_blog
            <div css={siteNameBlinkingCursor} />
          </p>
        </Link>
        <nav css={navStyle}>
          <NavBtn to="/about">About</NavBtn>
          <NavBtn to="/tags">Tags</NavBtn>
          <p onClick={onClickTheme} css={navButtonStyle}>
            Go pink
          </p>
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
