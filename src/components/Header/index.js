import {Component} from 'react'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'
import contextSave from '../../context/contextSave'
import {
  Nav,
  Img,
  Profile,
  DivItems,
  But,
  But1,
  LogoutButton,
  LogoBut,
  DivColor,
  ButtonConfirm,
  CancelBut,
  ButtonDivs,
} from './styledComponent'

class Header extends Component {
  state = {AppearTheme: true}

  Logout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  changeTheme = Themes => {
    this.setState(prevState => ({
      AppearTheme: !prevState.AppearTheme,
    }))
    Themes()
  }

  render() {
    const {AppearTheme} = this.state
    return (
      <contextSave.Consumer>
        {value => {
          const {Themes, theme} = value
          console.log(theme)
          return (
            <Nav theme1={theme}>
              <Link to="/">
                <Img
                  src={
                    theme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <DivItems>
                {AppearTheme ? (
                  <But
                    data-testid="theme"
                    onClick={() => this.changeTheme(Themes)}
                  >
                    <FaMoon size={24} />
                  </But>
                ) : (
                  <But1
                    data-testid="theme"
                    theme1={theme}
                    onClick={() => this.changeTheme(Themes)}
                  >
                    <BsBrightnessHigh size={24} />
                  </But1>
                )}
                <Profile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  modal
                  trigger={
                    <LogoutButton
                      type="button"
                      className="trigger-button"
                      theme1={theme}
                    >
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <DivColor>
                      <div>
                        <p>Are you sure, you want to logout</p>
                      </div>
                      <ButtonDivs>
                        <div>
                          <CancelBut type="button" onClick={() => close()}>
                            Cancel
                          </CancelBut>
                        </div>
                        <div>
                          <ButtonConfirm type="button" onClick={this.Logout}>
                            Confirm
                          </ButtonConfirm>
                        </div>
                      </ButtonDivs>
                    </DivColor>
                  )}
                </Popup>
              </DivItems>
            </Nav>
          )
        }}
      </contextSave.Consumer>
    )
  }
}
export default withRouter(Header)
