import { useContext, useCallback } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import themes from '../styles/themes';

const useToggleTheme = () => {
  const { setTheme } = useContext(ThemeContext);
  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      if (prev === themes.length - 1) {
        localStorage.setItem('dogmaTheme', '0');
        return 0;
      } else {
        localStorage.setItem('dogmaTheme', (prev + 1).toString());
        return prev + 1;
      }
    });
  }, [themes]);

  return { toggleTheme };
};

export default useToggleTheme;
