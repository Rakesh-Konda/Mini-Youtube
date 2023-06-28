import {Component} from 'react'
import Header from '../Header'
import Home from '../Home'
import {Div, Image, DivBottom, Para, Hh} from './styledComponent'
import contextSave from '../../context/contextSave'

class NotFound extends Component {
  render() {
    return (
      <contextSave.Consumer>
        {value => {
          const {theme} = value
          return (
            <div>
              <Header />
              <Div>
                <Home />
                <DivBottom theme1={theme}>
                  <Hh theme1={theme}>Page Not Found</Hh>
                  <Image
                    src={
                      theme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    }
                    alt="not found"
                  />
                  <Para theme1={theme}>
                    we are sorry, the page you requested could not be found.
                  </Para>
                </DivBottom>
              </Div>
            </div>
          )
        }}
      </contextSave.Consumer>
    )
  }
}
export default NotFound
