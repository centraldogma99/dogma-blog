import { navStyle } from '../../styles/Frame';
import NavBtn, { navButtonStyle } from './NavBtn';
import { useCallback, useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import themes from '../../styles/themes';
import useToggleTheme from '../../hooks/useToggleTheme';

const NavButtons = () => {
  const { toggleTheme } = useToggleTheme();
  return (
    <nav css={navStyle}>
      <NavBtn to="/about">About</NavBtn>
      <NavBtn to="/tags">Tags</NavBtn>
      <p onClick={toggleTheme} css={navButtonStyle}>
        Theme
      </p>
    </nav>
  );
};

export default NavButtons;
