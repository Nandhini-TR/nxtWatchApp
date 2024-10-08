import styled from 'styled-components'
import {MdHome, MdPlaylistAdd, MdPlaylistAddCheck} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiLike, BiDislike} from 'react-icons/bi'

export const GamingContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#181818')};
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`
export const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  width: 200px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const HomeSideContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`
export const EachOptionContainer = styled.div`
  display: flex;
  width: 200px;
`

export const HomeIcon = styled(MdHome)`
  color: ${props => (props.isLight ? '#424242' : '#cccccc')};
  font-size: 20px;
  margin-left: 10px;
  margin-top: 5px;
`
export const HomeTitle = styled.h1`
  color: ${props => (props.isLight ? '#212121' : '#ffffff')};
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 20px;
  margin-left: 10px;
`

export const TrendingIcon = styled(HiFire)`
  color: ${props => (props.isLight ? '#424242' : '#cccccc')};
  font-size: 20px;
  margin-left: 10px;
  margin-top: 5px;
`
export const GamingIcon = styled(SiYoutubegaming)`
  color: ${props => (props.isLight ? '#424242' : '#cccccc')};
  font-size: 20px;
  margin-left: 10px;
  margin-top: 5px;
`

export const SavedVideoIcon = styled(MdPlaylistAdd)`
  color: ${props => (props.isLight ? '#424242' : '#cccccc')};
  font-size: 20px;
  margin-left: 10px;
  margin-top: 5px;
`

export const ContactContainer = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`

export const ContactHeading = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.isLight ? '#00306e' : '#cccccc')};
  padding-left: 20px;
`

export const EachLogo = styled.img`
  height: 30px;
`

export const ContactDescription = styled(ContactHeading)`
  font-size: 14px;
  max-width: 200px;
  flex-wrap: wrap;
`

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FailureContainer = styled(HomePageContainer)`
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  height: 200px;
  @media screen and (max-width: 576px) {
    height: 100px;
  }
`

export const FailureDescriptionHeading = styled.h1`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.isLight ? '#000000' : '#ffffff')};
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`

export const FailureDescription = styled.p`
  font-size: 16px;
  color: ${props => (props.isLight ? '#606060' : '#94a3b8')};
  font-family: 'Roboto';
`

export const RetryButton = styled.button`
  height: 25px;
  width: 80px;
  font-size: 16px;
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 3px;
  border: 0px none;
  text-align: center;
`

export const VideoDetailsBgContainer = styled.div`
  background-color: ${props => (props.isLight ? ' #f1f1f1' : '#000000')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 25px;
  overflow-y: scroll;
  padding-top: 25px;
  flex-wrap: wrap;
`

export const ImageTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.isLight ? '#212121' : '#f9f9f9')};
  @media screen and (max-width: 576px) {
    font-size: 10px;
    width: 250px;
  }
`

export const ImageName = styled.p`
  font-size: 14px;
  color: ${props => (props.isLight ? '#616e7c' : '#94a3b8')};

  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LikesContainer = styled(VideoDetailsContainer)`
  justify-content: space-evenly;
`

export const LikeButton = styled.button`
  border: 0px none;
  background: transparent;
  color: ${props => {
    if (props.isLiked) {
      return '#2563eb'
    }
    if (props.isDisLiked) {
      return '#64748b'
    }
    return props.isLight ? '#616e7c' : '#94a3b8'
  }};
`
export const SaveButton = styled(LikeButton)`
  border: 0px none;
  background: transparent;
  color: ${props => {
    if (props.isSaved) {
      return '#2563eb'
    }
    return props.isLight ? '#616e7c' : '#94a3b8'
  }};
`

export const LikeIcon = styled(BiLike)`
  color: ${props => {
    if (props.isLiked) {
      return '#2563eb'
    }
    if (props.isDisLiked) {
      return '#64748b'
    }
    return props.isLight ? '#616e7c' : '#94a3b8'
  }};
  font-size: 18px;
`
export const DisLikeIcon = styled(BiDislike)`
  color: ${props => {
    if (props.isDisLiked) {
      return '#2563eb'
    }
    if (props.isLiked) {
      return '#64748b'
    }
    return props.isLight ? '#616e7c' : '#94a3b8'
  }};
  font-size: 18px;
`

export const DisLikeButton = styled.button`
  border: 0px none;
  background: transparent;
  color: ${props => {
    if (props.isDisLiked) {
      return '#2563eb'
    }
    if (props.isLiked) {
      return '#64748b'
    }
    return props.isLight ? '#616e7c' : '#94a3b8'
  }};
`

export const SavedIcon = styled(MdPlaylistAddCheck)`
  color: 3b82f6;
  font-size: 18px;
`
export const SaveIcon = styled(MdPlaylistAdd)`
  color: ${props => (props.isLight ? '#616e7c' : '#94a3b8')};
  font-size: 18px;
`

export const Line = styled.hr`
  color: ${props => (props.isLight ? '#616e7c' : '#94a3b8')};
`
export const ChannelContainer = styled(VideoDetailsContainer)`
  justify-content: start;
`

export const ProfileImage = styled.img`
  height: 40px;
`
export const Description = styled(ImageTitle)`
  width: 600px;
  @media screen and (max-width: 576px) {
    font-size: 10px;
    width: 250px;
  }
`
