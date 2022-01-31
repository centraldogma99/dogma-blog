/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect } from 'react';
import _ from 'lodash';
import { Theme } from '@emotion/react';

const style = (theme: Theme) => css`
  position: fixed;
  right: 35px;
  bottom: 35px;
  width: 40px;
  height: 40px;
  color: ${theme.colors.primary};
  border-radius: 50%;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 30%);
  padding: 4px;
  cursor: pointer;
`;

const GoToTopBtn = ({ ...props }) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

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
    <React.Fragment>
      {!isHidden ? <ArrowUpwardIcon css={style} {...props} /> : <div />}
    </React.Fragment>
  );
};

export default GoToTopBtn;
