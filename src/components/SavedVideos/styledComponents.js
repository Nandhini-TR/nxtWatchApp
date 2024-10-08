import styled from 'styled-components'
import {MdHome, MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

export const TrendingContainer = styled.div`
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
  padding-left: 20px;
`
export const EachOptionContainer = styled.div`
  display: flex;
  width: 200px;
  @media screen and (max-width: 576px) {
    width: 100vw;
  }
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
export const CurrentTitle = styled(HomeTitle)`
  font-weight: bold;
`

export const TrendingOptionContainer = styled(EachOptionContainer)`
  background-color: ${props => (props.isLight ? '#cbd5e1' : '#606060')};
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
  color: #ff0000;
  font-size: 20px;
  margin-left: 10px;
  margin-top: 5px;
`
export const ContactContainer = styled(HomeSideContainer)`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 20px;
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
  padding-left: 20px;
`

export const TrendingBanner = styled.div`
  display: flex;
  justify-content: start;
  height: 60px;
  background-color: ${props => (props.isLight ? '#ebebeb' : '#313131')};
  align-items: center;
  width: 100vw;
  height: 100px;
  padding-left: 30px;
  @media screen and (max-width: 576px) {
    height: 50px;
  }
`
export const IconContainer = styled.div`
  border-radius: 50px;
  background-color: ${props => (props.isLight ? '#cbd5e1' : '#000000')};
  height: 55px;
  width: 55px;
  margin-right: 20px;
  @media screen and (max-width: 576px) {
    height: 30px;
    width: 30px;
  }
`
export const SavedIconBanner = styled(HiFire)`
  color: #ff0000;
  font-size: 35px;
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: ${props => (props.isLight ? '#000000' : '#ffffff')};
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const TrendingBgContainer = styled.ul`
  background-color: ${props => (props.isLight ? ' #f1f1f1' : '#000000')};
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0px;
  overflow-y: scroll;
`
export const TrendingListContainer = styled.li`
  display: flex;
  margin-bottom: 10px;
`
export const Image = styled.img`
  height: 150px;
  width: 300px;
  @media screen and (max-width: 576px) {
    height: 50px;
    width: 100px;
  }
`
export const ImageTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.isLight ? '#000000' : '#ffffff')};
  width: 400px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const NoVideosTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.isLight ? '#000000' : '#ffffff')};
  width: 400px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const ImageName = styled.p`
  font-size: 14px;
  color: ${props => (props.isLight ? '#616e7c' : '#94a3b8')};
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`
export const NoVideosImage = styled.img`
  height: 250px;
  @media screen and (max-width: 576px) {
    height: 150px;
  }
`
