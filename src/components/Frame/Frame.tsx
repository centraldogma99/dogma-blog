/** @jsx jsx */
import { useRef, useCallback, useContext } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';
import './Frame.css';
import ThemeContext from '../../contexts/ThemeContext';
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
  goToTop,
  siteNameBlinkingCursor,
} from '../../styles/Frame';
import _ from 'lodash';
import NavButtons from './NavButtons';
import useViewport from '../../hooks/useViewport';
import NavDrawer from './NavDrawer';

const Frame = (props: { title?: string; children: any }) => {
  const { theme } = useContext(ThemeContext);
  const { width } = useViewport();
  const breakpoint = 650;
  const contentsContainer = useRef<HTMLDivElement>(null);

  const onClickGoToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div css={app}>
      <meta name="robots" content="all" />
      {theme && <meta name="theme-color" content={theme.colors.primary} />}
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
          <div css={siteName}>
            Dogma_blog
            <div css={siteNameBlinkingCursor} />
          </div>
        </Link>
        {width > breakpoint ? <NavButtons /> : <NavDrawer />}
      </div>
      <div css={contentsContainerStyle} ref={contentsContainer}>
        <div css={content}>
          {props.title && <div css={title}>{props.title}</div>}
          <article css={article}>{props.children}</article>
        </div>
      </div>
      <Footer />

      <StaticImage
        src="../../images/up-arrow.png"
        alt="up arrow"
        css={goToTop}
        onClick={onClickGoToTop}
      />
    </div>
  );
};

export default Frame;
