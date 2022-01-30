import { useState, useEffect } from 'react';
import _ from 'lodash';

const useViewport = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    const onResizeThrottled = _.throttle(onResize);
    window.addEventListener('resize', onResizeThrottled);
    return () => {
      window.removeEventListener('resize', onResizeThrottled);
    };
  }, []);

  return { width };
};

export default useViewport;
