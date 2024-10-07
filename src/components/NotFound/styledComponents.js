import styled from 'styled-components'
import {MdHome, MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

export const NotfoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#181818')};
  height: 100vh;
`

export const NotfoundContainer = styled(NotfoundPageContainer)`
  justify-content: center;
  align-items: center;
`

export const NotfoundImage = styled.img`
  height: 200px;
  @media screen and (max-width: 576px) {
    height: 100px;
  }
`

export const NotfoundDescriptionHeading = styled.h1`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.isLight ? '#000000' : '#ffffff')};
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`

export const NotfoundDescription = styled.p`
  font-size: 14px;
  color: ${props => (props.isLight ? '#606060' : '#94a3b8')};
  font-family: 'Roboto';
`

export const HomeContainer = styled.div`
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
export const HomeSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`
export const EachOptionContainer = styled.div`
  display: flex;
  width: 200px;
`
export const HomeOptionContainer = styled(EachOptionContainer)`
  background-color: ${props => (props.isLight ? '#cbd5e1' : '#606060')};
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
export const ContactContainer = styled(HomeSideContainer)`
  padding-left: 10px;
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
