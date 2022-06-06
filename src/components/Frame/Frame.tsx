import { useRef, useCallback, useContext } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import './Frame.css';
import ThemeContext from '../../contexts/ThemeContext';
import Footer from './Footer';
import {
  topBarContainerStyle,
  contentsContainerStyle,
  siteName,
  title,
  app,
  content,
  article,
  siteNameBlinkingCursor,
} from '../../styles/Frame';
import NavButtons from './NavButtons';
import useViewport from '../../hooks/useViewport';
import NavDrawer from './NavDrawer';
import GoToTopBtn from './GoToTopBtn';

const Frame = (props: { title?: string; children: any }) => {
  const { theme } = useContext(ThemeContext);
  const { width } = useViewport();
  const breakpoint = 650;
  const contentsContainerRef = useRef<HTMLDivElement>(null);

  const onClickGoToTop = useCallback(() => {
    contentsContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div css={app}>
      <meta name="robots" content="all" />
      {theme && <meta name="theme-color" content={theme.colors.primary} />}
      <title>
        {props.title ? `${props.title} | Dogma` : `Dogma blog`}
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
      <div css={contentsContainerStyle} ref={contentsContainerRef}>
        <div css={content}>
          {props.title && <div css={title}>{props.title}</div>}
          <article css={article}>{props.children}</article>
        </div>
      </div>
      <Footer />

      <GoToTopBtn onClick={onClickGoToTop} scrollObjRef={contentsContainerRef}/>
    </div>
  );
};

export default Frame;
