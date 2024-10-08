import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  SideMenuContainer,
  HomeSideContainer,
  HomeOptionContainer,
  EachOptionContainer,
  HomeIcon,
  CurrentTitle,
  HomeTitle,
  TrendingIcon,
  GamingIcon,
  SavedVideoIcon,
  ContactContainer,
  ContactHeading,
  EachLogo,
  ContactDescription,
  HomePageContainer,
  BannerContainer,
  NxtImage,
  NxtLogoContainer,
  ThemeButton,
  CloseButton,
  BannerDescription,
  GetNow,
  SearchContainer,
  Input,
  SearchIcon,
  FailureContainer,
  FailureImage,
  FailureDescriptionHeading,
  FailureDescription,
  RetryButton,
  UnList,
  List,
  ListImage,
  SuccessTitle,
  SuccessName,
  SearchButton,
  ListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    status: apiStatusConstants.initial,
    isBannerActive: true,
    searchInput: '',
    videos: [],
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({status: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        videos: updatedData,
        status: apiStatusConstants.success,
      })
    } else {
      this.setState({status: apiStatusConstants.failure})
    }
  }

  onClickBanner = () => {
    this.setState({isBannerActive: false})
  }

  renderSuccess = isLight => {
    const {videos} = this.state
    const isVideosExists = videos.length > 0
    return (
      <>
        {isVideosExists ? (
          <UnList>
            {videos.map(eachItem => {
              const dateObject = new Date(eachItem.publishedAt)
              const publishedDistance = formatDistanceToNow(dateObject, {
                addSuffix: true,
              })

              return (
                <List key={eachItem.id}>
                  <Link
                    to={`/videos/${eachItem.id}`}
                    style={{textDecoration: 'none'}}
                  >
                    <ListImage
                      src={eachItem.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <EachOptionContainer>
                      <EachLogo
                        src={eachItem.channel.profileImageUrl}
                        alt="channel logo"
                      />
                      <SuccessTitle isLight={isLight}>
                        {eachItem.title}
                      </SuccessTitle>
                    </EachOptionContainer>
                    <SuccessName isLight={isLight}>
                      {eachItem.channel.name}
                    </SuccessName>
                    <SuccessName isLight={isLight}>
                      {`${eachItem.viewCount} views • ${publishedDistance}`}
                    </SuccessName>
                  </Link>
                </List>
              )
            })}
          </UnList>
        ) : (
          <FailureContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureDescriptionHeading isLight={isLight}>
              No Search results found
            </FailureDescriptionHeading>
            <FailureDescription isLight={isLight}>
              Try different key words or remove search filter
            </FailureDescription>
            <RetryButton type="button" onClick={this.getAllVideos}>
              Retry
            </RetryButton>
          </FailureContainer>
        )}
      </>
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
        <RetryButton type="button" onClick={this.getAllVideos}>
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

  renderVideoPage = isLight => {
    const {status} = this.state

    switch (status) {
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

  onClickSearch = () => {
    this.getAllVideos()
  }

  handleSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {isBannerActive, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLight} = value
          const navItemsList = [
            {
              id: 1,
              path: '/',
              label: 'Home',
              icon: <HomeIcon isLight={isLight} />,
            },
            {
              id: 2,
              path: '/trending',
              label: 'Trending',
              icon: <TrendingIcon isLight={isLight} />,
            },
            {
              id: 3,
              path: '/gaming',
              label: 'Gaming',
              icon: <GamingIcon isLight={isLight} />,
            },
            {
              id: 4,
              path: '/saved-videos',
              label: 'Saved videos',
              icon: <SavedVideoIcon isLight={isLight} />,
            },
          ]
          return (
            <>
              <Header />
              <HomeContainer isLight={isLight} data-testid="home">
                <SideMenuContainer>
                  <HomeSideContainer>
                    {navItemsList.map(item => (
                      <ListContainer key={item.id}>
                        <Link to={item.path} style={{textDecoration: 'none'}}>
                          {item.icon}
                          <HomeTitle isLight={isLight}>{item.label}</HomeTitle>
                        </Link>
                      </ListContainer>
                    ))}
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
                <HomePageContainer>
                  {isBannerActive && (
                    <BannerContainer data-testid="banner">
                      <NxtLogoContainer>
                        <NxtImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <ThemeButton
                          data-testid="close"
                          type="button"
                          onClick={this.onClickBanner}
                        >
                          <CloseButton />
                        </ThemeButton>
                      </NxtLogoContainer>
                      <BannerDescription>
                        Buy Nxt Watch Premium prepaid pans with UPI
                      </BannerDescription>
                      <GetNow>GET IT NOW</GetNow>
                    </BannerContainer>
                  )}
                  <HomePageContainer>
                    <SearchContainer>
                      <Input
                        isLight={isLight}
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.handleSearchInput}
                      />
                      <SearchButton
                        type="button"
                        onClick={this.onClickSearch}
                        data-testid="searchButton"
                      >
                        <SearchIcon isLight={isLight} />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderVideoPage(isLight)}
                  </HomePageContainer>
                </HomePageContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
