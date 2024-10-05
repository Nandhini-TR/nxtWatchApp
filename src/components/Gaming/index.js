import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import {
  GamingContainer,
  SideMenuContainer,
  HomeSideContainer,
  GameOptionContainer,
  EachOptionContainer,
  HomeIcon,
  HomeTitle,
  CurrentTitle,
  TrendingIcon,
  GamingIcon,
  SavedVideoIcon,
  ContactContainer,
  ContactHeading,
  EachLogo,
  ContactDescription,
  HomePageContainer,
  FailureContainer,
  FailureImage,
  FailureDescriptionHeading,
  FailureDescription,
  RetryButton,
  IconContainer,
  TrendingIconBanner,
  TrendingBanner,
  TrendingBannerHeading,
  TrendingBgContainer,
  GamingListContainer,
  Image,
  ImageTitle,
  ImageName,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideosList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const modifiedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        gamingVideosList: modifiedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccess = isLight => {
    const {gamingVideosList} = this.state

    return (
      <HomePageContainer>
        <TrendingBanner isLight={isLight}>
          <IconContainer isLight={isLight}>
            <TrendingIconBanner />
          </IconContainer>
          <TrendingBannerHeading isLight={isLight}>
            Gaming
          </TrendingBannerHeading>
        </TrendingBanner>
        <TrendingBgContainer isLight={isLight}>
          {gamingVideosList.map(eachVideo => (
            <GamingListContainer key={eachVideo.id}>
              <Image src={eachVideo.thumbnailUrl} alt="video thumbnail" />
              <ImageTitle isLight={isLight}>{eachVideo.title}</ImageTitle>
              <ImageName
                isLight={isLight}
              >{`${eachVideo.viewCount} Watching Worldwide`}</ImageName>
            </GamingListContainer>
          ))}
        </TrendingBgContainer>
      </HomePageContainer>
    )
  }

  renderFailure = isLight => {
    const failureImg = isLight
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

    return (
      <FailureContainer>
        <FailureImage src={failureImg} alt="failure view" />
        <FailureDescriptionHeading isLight={isLight}>
          Oops! Something Went Wrong
        </FailureDescriptionHeading>
        <FailureDescription isLight={isLight}>
          We are having some trouble completing your request.
          <br />
          Please try again.
        </FailureDescription>
        <RetryButton type="button" onClick={this.getGamingVideos}>
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderGamingVideosPage = isLight => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccess(isLight)
      case apiStatusConstants.failure:
        return this.renderFailure(isLight)
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLight} = value
          return (
            <>
              <Header />
              <GamingContainer isLight={isLight}>
                <SideMenuContainer>
                  <HomeSideContainer>
                    <Link to="/" style={{textDecoration: 'none'}}>
                      <EachOptionContainer>
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
                      <GameOptionContainer isLight={isLight}>
                        <GamingIcon />
                        <CurrentTitle isLight={isLight}>Gaming</CurrentTitle>
                      </GameOptionContainer>
                    </Link>

                    <EachOptionContainer>
                      <SavedVideoIcon isLight={isLight} />
                      <HomeTitle isLight={isLight}>Saved videos</HomeTitle>
                    </EachOptionContainer>
                  </HomeSideContainer>
                  <ContactContainer>
                    <ContactHeading isLight={isLight}>
                      CONTACT US
                    </ContactHeading>
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
                {this.renderGamingVideosPage(isLight)}
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
