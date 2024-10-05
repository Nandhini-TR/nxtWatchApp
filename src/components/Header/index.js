import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  Navbar,
  Image,
  ProfileContainer,
  ThemeButton,
  ProfileImage,
  Logout,
  HamburgerMenu,
  LogoutIcon,
  SunLogo,
  MoonLogo,
} from './styledComponents'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLight, toggleTheme} = value

      const imgLogo = isLight
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      const onChangeTheme = () => {
        toggleTheme()
      }
      return (
        <Navbar isLight={isLight}>
          <Link to="/">
            <Image src={imgLogo} alt="nxt watch logo" />
          </Link>
          <ProfileContainer>
            <ThemeButton data-testid="theme" onClick={onChangeTheme}>
              {isLight ? <MoonLogo /> : <SunLogo />}
            </ThemeButton>

            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <HamburgerMenu isLight={isLight} />
            <LogoutIcon isLight={isLight} />
            <Logout isLight={isLight}>Logout</Logout>
          </ProfileContainer>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
