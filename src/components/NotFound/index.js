import {Link} from 'react-router-dom'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import {
  NotfoundPageContainer,
  NotfoundContainer,
  NotfoundImage,
  NotfoundDescriptionHeading,
  NotfoundDescription,
  HomeContainer,
  SideMenuContainer,
  HomeSideContainer,
  EachOptionContainer,
  HomeIcon,
  HomeTitle,
  TrendingIcon,
  GamingIcon,
  SavedVideoIcon,
  ContactContainer,
  ContactHeading,
  EachLogo,
  ContactDescription,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLight} = value
      const image = isLight
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <>
          <Header />
          <HomeContainer isLight={isLight}>
            <SideMenuContainer>
              <HomeSideContainer>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <EachOptionContainer isLight={isLight}>
                    <HomeIcon isLight={isLight} />
                    <HomeTitle isLight={isLight}>Home</HomeTitle>
                  </EachOptionContainer>
                </Link>

                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <EachOptionContainer>
                    <TrendingIcon isLight={isLight} />
                    <HomeTitle isLight={isLight}>Trending</HomeTitle>
                  </EachOptionContainer>
                </Link>

                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  <EachOptionContainer>
                    <GamingIcon isLight={isLight} />
                    <HomeTitle isLight={isLight}>Gaming</HomeTitle>
                  </EachOptionContainer>
                </Link>

                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  <EachOptionContainer>
                    <SavedVideoIcon isLight={isLight} />
                    <HomeTitle isLight={isLight}>Saved videos</HomeTitle>
                  </EachOptionContainer>
                </Link>
              </HomeSideContainer>
              <ContactContainer>
                <ContactHeading isLight={isLight}>CONTACT US</ContactHeading>
                <EachOptionContainer>
                  <EachLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <EachLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <EachLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </EachOptionContainer>
                <ContactDescription isLight={isLight}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactDescription>
              </ContactContainer>
            </SideMenuContainer>
            <NotfoundPageContainer isLight={isLight}>
              <NotfoundContainer isLight={isLight}>
                <NotfoundImage src={image} alt="not found" />
                <NotfoundDescriptionHeading isLight={isLight}>
                  Page Not Found
                </NotfoundDescriptionHeading>
                <NotfoundDescription isLight={isLight}>
                  We are sorry, the page you are requested could not be found
                </NotfoundDescription>
              </NotfoundContainer>
            </NotfoundPageContainer>
          </HomeContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
