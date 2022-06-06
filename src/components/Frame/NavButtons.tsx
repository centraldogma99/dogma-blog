import useToggleTheme from '../../hooks/useToggleTheme'
import { navStyle } from '../../styles/Frame'
import NavBtn, { navButtonStyle } from './NavBtn'

const NavButtons = () => {
  const { toggleTheme } = useToggleTheme()

  return (
    <nav css={navStyle}>
      <NavBtn to="/about">About</NavBtn>
      <NavBtn to="/tags">Tags</NavBtn>
      <p onClick={toggleTheme} css={navButtonStyle}>
        Theme
      </p>
    </nav>
  )
}

export default NavButtons
