import {Component} from 'react'
import {Link} from 'react-router-dom'
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
  TrendingBanner,
  IconContainer,
  SavedIconBanner,
  Title,
  TrendingBgContainer,
  TrendingListContainer,
  Image,
  ImageTitle,
  ImageName,
  NoVideosImage,
  NoVideosTitle,
} from './styledComponents'

class SavedVideos extends Component {
  renderSavedVideosPage = (isLight, savedVideos) => {
    const isEmpty = savedVideos.length === 0

    return (
      <>
        {isEmpty ? (
          <HomePageContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoVideosTitle>No saved videos found</NoVideosTitle>
            <ImageName>You can save your videos while watching them</ImageName>
          </HomePageContainer>
        ) : (
          <HomePageContainer>
            <TrendingBanner isLight={isLight}>
              <IconContainer isLight={isLight}>
                <SavedIconBanner />
              </IconContainer>
              <Title isLight={isLight}>Saved Videos</Title>
            </TrendingBanner>
            <TrendingBgContainer isLight={isLight}>
              {savedVideos.map(eachVideo => {
                const dateObject = new Date(eachVideo.publishedAt)
                const publishedDate = formatDistanceToNow(dateObject, {
                  addSuffix: true,
                })
                return (
                  <TrendingListContainer key={eachVideo.id}>
                    <Link
                      to={`/videos/${eachVideo.id}`}
                      style={{textDecoration: 'none'}}
                    >
                      <Image
                        src={eachVideo.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <HomeSideContainer>
                        <ImageTitle isLight={isLight}>
                          {eachVideo.title}
                        </ImageTitle>
                        <ImageName isLight={isLight}>
                          {eachVideo.channel.name}
                        </ImageName>
                        <TrendingListContainer>
                          <ImageName isLight={isLight}>
                            {`${eachVideo.viewCount} views . ${publishedDate}`}
                          </ImageName>
                        </TrendingListContainer>
                      </HomeSideContainer>
                    </Link>
                  </TrendingListContainer>
                )
              })}
            </TrendingBgContainer>
          </HomePageContainer>
        )}
      </>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLight, savedVideos} = value
          return (
            <>
              <Header />
              <TrendingContainer isLight={isLight}>
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
                      <EachOptionContainer>
                        <GamingIcon isLight={isLight} />
                        <HomeTitle isLight={isLight}>Gaming</HomeTitle>
                      </EachOptionContainer>
                    </Link>

                    <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                      <TrendingOptionContainer isLight={isLight}>
                        <SavedVideoIcon />
                        <CurrentTitle isLight={isLight}>
                          Saved videos
                        </CurrentTitle>
                      </TrendingOptionContainer>
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
                {this.renderSavedVideosPage(isLight, savedVideos)}
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
