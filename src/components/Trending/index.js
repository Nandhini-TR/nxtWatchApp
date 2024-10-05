import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendingContainer,
  SideMenuContainer,
  HomeSideContainer,
  TrendingOptionContainer,
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
  TrendingBanner,
  IconContainer,
  TrendingIconBanner,
  TrendingBannerHeading,
  TrendingBgContainer,
  TrendingListContainer,
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

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideosList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const modifiedData = data.videos.map(eachVideo => ({
        channel: eachVideo.channel,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        trendingVideosList: modifiedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccess = isLight => {
    const {trendingVideosList} = this.state

    return (
      <HomePageContainer>
        <TrendingBanner isLight={isLight}>
          <IconContainer isLight={isLight}>
            <TrendingIconBanner />
          </IconContainer>
          <TrendingBannerHeading isLight={isLight}>
            Trending
          </TrendingBannerHeading>
        </TrendingBanner>
        <TrendingBgContainer isLight={isLight}>
          {trendingVideosList.map(eachVideo => {
            const dateObject = new Date(eachVideo.publishedAt)
            const publishedDate = formatDistanceToNow(dateObject, {
              addSuffix: true,
            })
            return (
              <TrendingListContainer key={eachVideo.id}>
                <Image src={eachVideo.thumbnailUrl} alt="video thumbnail" />
                <HomeSideContainer>
                  <ImageTitle isLight={isLight}>{eachVideo.title}</ImageTitle>
                  <ImageName isLight={isLight}>
                    {eachVideo.channel.name}
                  </ImageName>
                  <TrendingListContainer>
                    <ImageName isLight={isLight}>
                      {`${eachVideo.viewCount} views . ${publishedDate}`}
                    </ImageName>
                  </TrendingListContainer>
                </HomeSideContainer>
              </TrendingListContainer>
            )
          })}
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
        <FailureDescriptionHeading>
          Oops! Something Went Wrong
        </FailureDescriptionHeading>
        <FailureDescription>
          We are having some trouble to complete your request.
          <br />
          Please try again
        </FailureDescription>
        <RetryButton type="button" onClick={this.getTrendingVideos}>
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

  renderTrendingVideosPage = isLight => {
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
    const {trendingVideosList} = this.state
    console.log(trendingVideosList)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLight} = value
          return (
            <>
              <Header />
              <TrendingContainer isLight={isLight}>
                <SideMenuContainer>
                  <HomeSideContainer>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <EachOptionContainer>
                        <HomeIcon isLight={isLight} />
                        <HomeTitle isLight={isLight}>Home</HomeTitle>
                      </EachOptionContainer>
                    </Link>

                    <Link to="/trending" style={{ textDecoration: 'none' }}>
                      <TrendingOptionContainer isLight={isLight}>
                        <TrendingIcon />
                        <CurrentTitle isLight={isLight}>Trending</CurrentTitle>
                      </TrendingOptionContainer>
                    </Link>

                    <Link to="/gaming" style={{ textDecoration: 'none' }}>
                      <EachOptionContainer>
                        <GamingIcon isLight={isLight} />
                        <HomeTitle isLight={isLight}>Gaming</HomeTitle>
                      </EachOptionContainer>
                    </Link>

                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <EachOptionContainer>
                        <SavedVideoIcon isLight={isLight} />
                        <HomeTitle isLight={isLight}>Saved videos</HomeTitle>
                      </EachOptionContainer>
                    </Link>
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
                {this.renderTrendingVideosPage(isLight)}
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
