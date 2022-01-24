import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/css';

const style = css`
  position: fixed;
  right: 35px;
  bottom: 35px;
  width: 40px;
  height: 40px;
`;

const GoToTopBtn = () => {
  return (
    <StaticImage
      src="../images/up-arrow.png"
      alt="up arrow"
      className={style}
    />
  );
};

export default GoToTopBtn;
