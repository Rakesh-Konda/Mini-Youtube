import {Component} from 'react'
import Header from '../Header'
import contextSave from '../../context/contextSave'

import {
  DivLeft,
  IconsDiv,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Div,
  DivImages,
  Image,
  ParaBelow,
  LinkItem,
  Par,
  Par1,
} from './styledComponent'

class Home extends Component {
  render() {
    return (
      <contextSave.Consumer>
        {value => {
          const {theme} = value
          return (
            <div>
              <Div>
                <div>
                  <DivLeft theme1={theme}>
                    <div>
                      <LinkItem to="/">
                        <IconsDiv>
                          <Icon1 size={24} theme1={theme} />
                          <Par theme1={theme}>Home</Par>
                        </IconsDiv>
                      </LinkItem>
                      <LinkItem to="/trending">
                        <IconsDiv>
                          <Icon2 theme1={theme} size={24} />
                          <Par theme1={theme}>Trending</Par>
                        </IconsDiv>
                      </LinkItem>
                      <LinkItem to="/gaming">
                        <IconsDiv>
                          <Icon3 theme1={theme} size={24} />
                          <Par theme1={theme}>Gaming</Par>
                        </IconsDiv>
                      </LinkItem>
                      <LinkItem to="/saved-videos">
                        <IconsDiv>
                          <Icon4 theme1={theme} size={24} />
                          <Par theme1={theme}>Saved videos</Par>
                        </IconsDiv>
                      </LinkItem>
                    </div>
                    <div>
                      <Par1 theme1={theme}>CONTACT US</Par1>
                      <DivImages>
                        <Image
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                          alt="facebook logo"
                        />
                        <Image
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                          alt="twitter logo"
                        />
                        <Image
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                          alt="linked in logo"
                        />
                      </DivImages>
                      <ParaBelow theme1={theme}>
                        Enjoy! Now to see your <br /> channels and <br />
                        recommendations!
                      </ParaBelow>
                    </div>
                  </DivLeft>
                </div>
              </Div>
            </div>
          )
        }}
      </contextSave.Consumer>
    )
  }
}
export default Home

// import {formatDistanceToNow} from 'date-fns'
// console.log(formatDistanceToNow(new Date(2021, 8, 20)))
