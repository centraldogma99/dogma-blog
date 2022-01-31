/** @jsx jsx */
import React from 'react';
import DrawerList from './DrawerList';
import { Divider, Drawer, List } from '@mui/material';
import { useState, useCallback } from 'react';
import { jsx, css } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'gatsby';
import useToggleTheme from '../../hooks/useToggleTheme';
import InfoIcon from '@mui/icons-material/Info';
import TagIcon from '@mui/icons-material/Tag';
import PaletteIcon from '@mui/icons-material/Palette';

import { Theme } from '@emotion/react';

const hamburgerStyle = css`
  color: white;
  width: 35px;
  height: 35px;
`;

const drawerContainerStyle = (theme: Theme) => css`
  color: ${theme.colors.text};
  background-color: ${theme.colors.globalBackground};
  a {
    color: ${theme.colors.text};
    text-decoration: none;
  }
`;

const iconStyle = css`
  margin-right: 18px;
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
          <Link to="/about">
            <DrawerList>
              <InfoIcon css={iconStyle} />
              About
            </DrawerList>
          </Link>
          <Link to="/tags">
            <DrawerList>
              <TagIcon css={iconStyle} />
              Tags
            </DrawerList>
          </Link>
          <DrawerList onClick={toggleTheme}>
            <PaletteIcon css={iconStyle} />
            Theme
          </DrawerList>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default NavDrawer;
