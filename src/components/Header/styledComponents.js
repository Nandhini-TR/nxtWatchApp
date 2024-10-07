import styled from 'styled-components'
import {IoSunnyOutline, IoMoon} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#181818')};
  padding: 20px;
`

export const Image = styled.img`
  width: 150px;
  height: 25px;
  @media screen and (max-width: 576px) {
    width: 100px;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const ThemeButton = styled.button`
  border: 0px none;
  background-color: transparent;
`
export const SunLogo = styled(IoSunnyOutline)`
  color: #ffffff;
  margin-right: 10px;
  font-size: 30px;
`
export const MoonLogo = styled(IoMoon)`
  color: #000000;
  margin-right: 10px;
  font-size: 30px;
`

export const ProfileImage = styled.img`
  height: 30px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const Logout = styled.button`
  background-color: transparent;
  font-weight: bold;
  border: ${props =>
    props.isLight ? '1px solid #3b82f6' : '1px solid #ffffff'};
  color: ${props => (props.isLight ? '#3b82f6' : '#ffffff')};
  border-radius: 5px;
  margin-left: 10px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const HamburgerMenu = styled(GiHamburgerMenu)`
  color: ${props => (props.isLight ? '#000000' : '#ffffff')};
  margin-right: 10px;
  display: none;
  @media screen and (max-width: 576px) {
    display: block;
  }
`

export const LogoutIcon = styled(FiLogOut)`
  color: ${props => (props.isLight ? '#000000' : '#ffffff')};
  display: block;

  @media screen and (min-width: 577px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#181818')};
  border-radius: 10px;
`
export const PopupDescription = styled.p`
  color: ${props => (props.isLight ? '#00306e' : '#f8fafc')};
  font-size: 14px;
  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
`
export const CancelButton = styled.button`
  border-radius: 2px;
  border: ${props =>
    props.isLight ? '1px solid #cccccc' : '1px solid #f8fafc'};
  background: transparent;
  color: ${props => (props.isLight ? '#94a3b8' : '#cbd5e1')};
  font-weight: bold;
  margin: 10px;
  text-align: center;
  height: 40px;
  padding: 10px;
`
export const ConfirmButton = styled(CancelButton)`
  color: #ffffff;
  background: #3b82f6;
  border: 0px none;
`
