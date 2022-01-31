/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';
import React, { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect } from 'react';
import _ from 'lodash';
import { Theme } from '@emotion/react';
import { useCallback } from 'react';

const animationHide = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    display: none;
  }
`;

const animationReveal = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    display: block;
  }
`;

const GoToTopBtn = ({ ...props }) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const style = useCallback(
    (theme: Theme) => {
      return css`
        position: fixed;
        right: 35px;
        bottom: 35px;
        width: 40px;
        height: 40px;
        background-color: ${theme.colors.primary};
        border-radius: 50%;
        box-shadow: 0px 2px 10px rgb(0 0 0 / 30%);
        padding: 4px;
        cursor: pointer;
        color: white;
        animation: ${isHidden ? animationHide : animationReveal} 0.7s forwards;
      `;
    },
    [isHidden],
  );

  useEffect(() => {
    let timer: number | null;
    const throttledFunc = _.throttle(() => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setIsHidden(false);
      }, 150);
      setIsHidden(true);
    }, 100);
    window.addEventListener('scroll', throttledFunc);

    return () => window.removeEventListener('scroll', throttledFunc);
  }, []);

  return (
    <div>
      <ArrowUpwardIcon css={style} {...props} />
    </div>
  );
};

export default GoToTopBtn;
