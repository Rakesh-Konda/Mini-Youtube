import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginDiv,
  LogoImg,
  Div,
  DivInput,
  Input,
  Label,
  InputCheck,
  Button,
  Para,
} from './styledComponent'

class Login extends Component {
  state = {
    showErrorMsg: false,
    name: '',
    password: '',
    showPass: false,
    Errors: '',
  }

  Username = event => {
    console.log(event.target.value)
    this.setState({name: event.target.value})
  }

  Password = event => {
    console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  ShowPassword = () => {
    this.setState(prevState => ({
      showPass: !prevState.showPass,
    }))
  }

  getSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  Login = async event => {
    event.preventDefault()
    const {name, password} = this.state
    const userDetails = {username: name, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.getSuccess(data.jwt_token)
    } else {
      this.setState({Errors: data.error_msg, showErrorMsg: true})
    }
  }

  render() {
    const {showErrorMsg, showPass, Errors} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <Div>
        <LoginDiv onSubmit={this.Login}>
          <LogoImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <DivInput>
            <Label htmlFor="username">USERNAME</Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              onChange={this.Username}
            />
          </DivInput>
          <DivInput>
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              type={showPass ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              onChange={this.Password}
            />
          </DivInput>
          <div>
            <InputCheck
              type="checkbox"
              id="check"
              onChange={this.ShowPassword}
            />
            <Label htmlFor="check">Show Password</Label>
          </div>
          <Button type="submit">Login</Button>
          {showErrorMsg && <Para>*{Errors}</Para>}
        </LoginDiv>
      </Div>
    )
  }
}
export default Login
