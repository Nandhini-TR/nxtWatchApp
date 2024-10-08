import {Component} from 'react'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  LightLoginBgContainer,
  DarkLoginBgContainer,
  LightLoginContainer,
  DarkLoginContainer,
  Image,
  Form,
  LightLabel,
  LightPasswordLabel,
  DarkPasswordLabel,
  DarkLabel,
  Input,
  ShowPasswordContainer,
  LoginButton,
  LightErrorMsg,
  DarkErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  componentDidMount() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      const {history} = this.props
      history.replace('/')
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showSubmitError,
      errorMsg,
    } = this.state

    const passwordType = showPassword ? 'text' : 'password'

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLight} = value

          const LoginBgContainer = isLight
            ? LightLoginBgContainer
            : DarkLoginBgContainer

          const LoginContainer = isLight
            ? LightLoginContainer
            : DarkLoginContainer

          const imgLogo = isLight
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          const Label = isLight ? LightLabel : DarkLabel

          const PasswordLabel = isLight ? LightPasswordLabel : DarkPasswordLabel

          const ErrorMsg = isLight ? LightErrorMsg : DarkErrorMsg

          return (
            <LoginBgContainer>
              <LoginContainer>
                <Image src={imgLogo} alt="website logo" />
                <Form onSubmit={this.onSubmitForm}>
                  <Label htmlFor="Username">USERNAME</Label>
                  <Input
                    type="text"
                    placeholder="Username"
                    id="Username"
                    value={username}
                    onChange={this.onChangeUsername}
                    changeColor={isLight}
                  />

                  <Label htmlFor="Password">PASSWORD</Label>
                  <Input
                    type={passwordType}
                    placeholder="Password"
                    id="Password"
                    value={password}
                    onChange={this.onChangePassword}
                    changeColor={isLight}
                  />

                  <ShowPasswordContainer>
                    <input
                      type="checkbox"
                      id="ShowPassword"
                      checked={showPassword}
                      onChange={this.toggleShowPassword}
                    />
                    <PasswordLabel htmlFor="ShowPassword">
                      Show Password
                    </PasswordLabel>
                  </ShowPasswordContainer>

                  <LoginButton type="submit">Login</LoginButton>

                  {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </Form>
              </LoginContainer>
            </LoginBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default LoginForm
