import styled from 'styled-components'
import {MdHome, MdPlaylistAdd, MdClose} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {GoSearch} from 'react-icons/go'

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
export const HomeSideContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`
export const EachOptionContainer = styled.div`
  display: flex;
  width: 200px;
`
export const ListContainer = styled.li`
  display: flex;
  width: 200px;
`

export const HomeOptionContainer = styled(EachOptionContainer)`
  background-color: ${props => (props.isLight ? '#cbd5e1' : '#606060')};
`

export const HomeIcon = styled(MdHome)`
  color: #ff0000;
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
  display: flex;
  flex-direction: column;
  align-items: baseline;
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
export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const BannerContainer = styled(HomePageContainer)`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 30vh;
  width: 90vw;
  background-size: cover;
  padding-left: 20px;
  margin-left: 10px;
  @media screen and (max-width: 576px) {
    background-image: none;
    background-color: #ffffff;
    height: 150px;
  }
`
export const NxtImage = styled.img`
  width: 150px;
  height: 30px;
  margin: 10px;
  @media screen and (max-width: 576px) {
    width: 100px;
  }
`
export const NxtLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CloseButton = styled(MdClose)`
  margin-right: 30px;
  font-size: 20px;
  color: #383838;
`
export const BannerDescription = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: #231f20;
`
export const ThemeButton = styled.button`
  border: 0px none;
  background-color: transparent;
`

export const GetNow = styled.button`
  font-size: 14px;
  border: 1px solid #231f20;
  text-align: center;
  width: 100px;
  height: 30px;
  background: transparent;
`
export const SearchContainer = styled.div`
  display: flex;
  margin-left: 10px;
  margin-top: 30px;
`
export const Input = styled.input`
  border: ${props =>
    props.isLight ? '1px solid #ebebeb' : '1px solid #383838'};
  height: 30px;
  width: 300px;
  padding: 10px;
  font-size: 16px;
  color: #94a3b8;
  background: transparent;
  @media screen and (max-width: 576px) {
    width: 200px;
  }
`

export const SearchButton = styled.button`
  background: transparent;
  border: 0px none;
`

export const SearchIcon = styled(GoSearch)`
  border: ${props =>
    props.isLight ? '1px solid #ebebeb' : '1px solid #383838'};
  font-size: 10px;
  color: #94a3b8;
  height: 30px;
  width: 100px;
  background-color: ${props => (props.isLight ? '#f4f4f4' : '#424242')};
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
export const UnList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`
export const List = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 300px;
`

export const ListImage = styled.img`
  height: 200px;
  width: 300px;
`
export const SuccessTitle = styled.p`
  font-weight: none;
  margin-bottom: 0px;
  color: ${props => (props.isLight ? '#212121' : '#ffffff')};
  font-size: 14px;
  margin-bottom: 20px;
  margin-left: 10px;
`
export const SuccessName = styled.p`
  font-size: 14px;
  margin-top: 0px;
  color: ${props => (props.isLight ? '#616e7c' : '#cbd5e1')};
`
