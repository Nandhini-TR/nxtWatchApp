import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
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
  PopupContainer,
  PopupDescription,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => (
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
            <Popup
              modal
              trigger={<Logout isLight={isLight}>Logout</Logout>}
              contentStyle={{
                borderRadius: '10px',
                height: '150px',
                textAlign: 'center',
                width: '30%',
                backgroundColor: isLight ? '#f9f9f9' : '#181818',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '0px none',
              }}
            >
              {close => (
                <PopupContainer isLight={isLight}>
                  <PopupDescription isLight={isLight}>
                    Are you sure you want to logout?
                  </PopupDescription>
                  <ButtonContainer>
                    <CancelButton
                      isLight={isLight}
                      type="button"
                      className="cancel-button"
                      onClick={() => close()}
                    >
                      Cancel
                    </CancelButton>

                    <ConfirmButton
                      type="button"
                      className="confirm-button"
                      onClick={() => {
                        Cookies.remove('jwt_token')
                        const {history} = props
                        history.replace('/login')
                      }}
                    >
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </PopupContainer>
              )}
            </Popup>
          </ProfileContainer>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
