/** @jsx jsx */
import { StaticImage } from 'gatsby-plugin-image';
import { css, jsx } from '@emotion/react';

const style = css`
  position: fixed;
  right: 35px;
  bottom: 35px;
  width: 40px;
  height: 40px;
`;

const GoToTopBtn = () => {
  return (
    <StaticImage src="../../images/up-arrow.png" alt="up arrow" css={style} />
  );
};

export default GoToTopBtn;
