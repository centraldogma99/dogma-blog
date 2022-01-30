/** @jsx jsx */
import React from 'react';
import DrawerList from './DrawerList';
import { Divider, Drawer, List } from '@mui/material';
import { useState, useCallback } from 'react';
import { jsx, css } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'gatsby';
import useToggleTheme from '../../hooks/useToggleTheme';

import { Theme } from '@emotion/react';

const hamburgerStyle = css`
  color: white;
  width: 35px;
  height: 35px;
`;

const drawerContainerStyle = (theme: Theme) => css`
  color: ${theme.colors.text};
  a {
    color: ${theme.colors.text};
    text-decoration: none;
  }
`;

const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { toggleTheme } = useToggleTheme();

  const onClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClickDrawerList = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <React.Fragment>
      <MenuIcon onClick={onClick} css={hamburgerStyle} />
      <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="top">
        <div css={drawerContainerStyle} onClick={onClickDrawerList}>
          <DrawerList>
            <Link to="/about">About</Link>
          </DrawerList>
          <Divider />
          <DrawerList>
            <Link to="/tags">Tags</Link>
          </DrawerList>
          <Divider />
          <DrawerList onClick={toggleTheme}>Theme</DrawerList>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default NavDrawer;
