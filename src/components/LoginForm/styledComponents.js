import styled from 'styled-components'

export const LightLoginBgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`
export const DarkLoginBgContainer = styled(LightLoginBgContainer)`
  background-color: #313131;
`

export const LightLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0px none;
  border-radius: 5px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  height: 500px;
  width: 500px;
  background-color: #ffffff;
  @media screen and (max-width: 576px) {
    height: 400px;
    width: 400px;
  }
`
export const DarkLoginContainer = styled(LightLoginContainer)`
  background-color: #000000;
`

export const Image = styled.img`
  height: 40px;
  width: 200px;
  @media screen and (max-width: 576px) {
    width: 100px;
  }
`
export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 15px;
`
export const LightLabel = styled.label`
  color: #64748b;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
export const Input = styled.input`
  width: 300px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  background-color: transparent;
  color: ${props => (props.changeColor ? '#000000' : '#ffffff')};
  @media screen and (max-width: 576px) {
    font-size: 16px;
    width: 180px;
  }
`

export const DarkLabel = styled(LightLabel)`
  color: #ffffff;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
`

export const LightPasswordLabel = styled(LightLabel)`
  padding-left: 5px;
  color: #000000;
  font-weight: normal;
`
export const DarkPasswordLabel = styled(LightPasswordLabel)`
  color: #ffffff;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  border: 0px none;
  border-radius: 4px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 300px;
  height: 30px;
  @media screen and (max-width: 576px) {
    width: 180px;
  }
`
export const LightErrorMsg = styled.p`
  font-size: 14px;
  margin-top: 10px;
  color: #ff0000;
`
export const DarkErrorMsg = styled(LightErrorMsg)`
  color: #ff0b37;
`
