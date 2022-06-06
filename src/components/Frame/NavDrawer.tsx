import { css } from '@emotion/react'
import { Theme } from '@emotion/react'
import InfoIcon from '@mui/icons-material/Info'
import MenuIcon from '@mui/icons-material/Menu'
import PaletteIcon from '@mui/icons-material/Palette'
import TagIcon from '@mui/icons-material/Tag'
import { Drawer } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'
import { useCallback, useState } from 'react'

import useToggleTheme from '../../hooks/useToggleTheme'
import DrawerList from './DrawerList'

const hamburgerStyle = css`
  color: white;
  width: 35px;
  height: 35px;
`

const drawerContainerStyle = (theme: Theme) => css`
  color: ${theme.colors.text};
  background-color: ${theme.colors.globalBackground};
  a {
    color: ${theme.colors.text};
    text-decoration: none;
  }
`

const iconStyle = css`
  margin-right: 18px;
`

const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { toggleTheme } = useToggleTheme()

  const onClick = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onClickDrawerList = useCallback(() => {
    setIsOpen(false)
  }, [])

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
  )
}

export default NavDrawer
