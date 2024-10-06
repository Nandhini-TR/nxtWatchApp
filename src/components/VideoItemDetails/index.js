import {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import {
  GamingContainer,
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
  HomePageContainer,
  FailureContainer,
  FailureImage,
  FailureDescriptionHeading,
  FailureDescription,
  RetryButton,
  VideoDetailsBgContainer,
  VideoDetailsContainer,
  LikesContainer,
  LikeButton,
  DisLikeButton,
  ImageTitle,
  ImageName,
  LikeIcon,
  DisLikeIcon,
  SaveIcon,
  Line,
  ProfileImage,
  ChannelContainer,
  Description,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoItemList: {},
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()

      const modifiedData = {
        videoDetails: {
          id: data.video_details.id,
          title: data.video_details.title,
          videoUrl: data.video_details.video_url,
          thumbnailUrl: data.video_details.thumbnail_url,
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
          viewCount: data.video_details.view_count,
          publishedAt: data.video_details.published_at,
          description: data.video_details.description,
        },
      }

      this.setState({
        videoItemList: modifiedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  onClickDisLike = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isLiked,
      isLiked: false,
    }))
  }

  renderSuccess = isLight => {
    const {videoItemList, isLiked, isDisLiked} = this.state

    const {
      title,
      videoUrl,
      viewCount,
      publishedAt,
      description,
    } = videoItemList.videoDetails
    const {
      name,
      profileImageUrl,
      subscriberCount,
    } = videoItemList.videoDetails.channel

    const dateObject = new Date(publishedAt)
    const publishedDate = formatDistanceToNow(dateObject, {addSuffix: true})

    return (
      <HomePageContainer>
        <VideoDetailsBgContainer isLight={isLight}>
          <ReactPlayer url={videoUrl} controls />
          <ImageTitle isLight={isLight}>{title}</ImageTitle>
          <VideoDetailsContainer>
            <ImageName
              isLight={isLight}
            >{`${viewCount} views . ${publishedDate}`}</ImageName>
            <LikesContainer>
              <LikeButton
                isLight={isLight}
                isLiked={isLiked}
                isDisLiked={isDisLiked}
                type="button"
                onClick={this.onClickLike}
              >
                <LikeIcon
                  isLight={isLight}
                  isLiked={isLiked}
                  isDisLiked={isDisLiked}
                />{' '}
                Like
              </LikeButton>
              <DisLikeButton
                isLight={isLight}
                isDisLiked={isDisLiked}
                isLiked={isLiked}
                type="button"
                onClick={this.onClickDisLike}
              >
                <DisLikeIcon
                  isLight={isLight}
                  isLiked={isLiked}
                  isDisLiked={isDisLiked}
                />{' '}
                DisLike
              </DisLikeButton>
              <LikeButton isLight={isLight}>
                <SaveIcon isLight={isLight} /> Save
              </LikeButton>
            </LikesContainer>
          </VideoDetailsContainer>
          <Line isLight={isLight} />
          <ChannelContainer>
            <ProfileImage src={profileImageUrl} alt="" />
            <HomeSideContainer>
              <ImageTitle isLight={isLight}>{name}</ImageTitle>
              <ImageName isLight={isLight}>
                {subscriberCount} subscribers
              </ImageName>
            </HomeSideContainer>
          </ChannelContainer>
          <Description isLight={isLight}>{description}</Description>
        </VideoDetailsBgContainer>
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

  renderVideoItemDetails = isLight => {
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
                      <EachOptionContainer isLight={isLight}>
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
                {this.renderVideoItemDetails(isLight)}
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
