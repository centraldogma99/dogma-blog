/** @jsx jsx */
import { css, jsx, Theme } from '@emotion/react';

const footerStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-decoration: none;
  height: 30px;

  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <div css={footerStyle}>
      <p>
        Source on{' '}
        <b>
          <a href="https://github.com/centraldogma99/dogma-blog">Github</a>
        </b>
      </p>
    </div>
  );
};

export default Footer;
