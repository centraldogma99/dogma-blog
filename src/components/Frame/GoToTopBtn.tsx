import { css, keyframes } from '@emotion/react';
import React, { useState, useCallback } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect } from 'react';
import _ from 'lodash';
import { Theme } from '@emotion/react';
import {SvgIconProps} from "@mui/material";

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

interface Props extends SvgIconProps{
  scrollObjRef?: React.MutableRefObject<HTMLDivElement>,
}

const GoToTopBtn = ({ scrollObjRef, ...props }: Props) => {
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
        box-shadow: 0 2px 10px rgb(0 0 0 / 30%);
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
    scrollObjRef.current?.addEventListener('scroll', throttledFunc);

    return () => scrollObjRef.current?.removeEventListener('scroll', throttledFunc);
  }, [scrollObjRef]);

  return (
    <div>
      <ArrowUpwardIcon css={style} {...props} />
    </div>
  );
};

export default GoToTopBtn;
