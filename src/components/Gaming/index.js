import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Home from '../Home'
import Header from '../Header'
import contextSave from '../../context/contextSave'
import {
  DivRig,
  Icon,
  DivIco,
  Ul,
  Li,
  GameImg,
  Head,
  Para,
  FailedImg,
  DivFail,
  RetryBut,
  LinkItem,
  Hea,
  DivBa,
  Pt,
  UnNone,
} from './styledComponent'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Gaming extends Component {
  state = {Videos: [], apistatus: apiStatusConstant.initial}

  componentDidMount() {
    this.get()
  }

  getSuccessView = data => {
    const UpdatedData = data.videos.map(each => ({
      id: each.id,
      title: each.title,
      views: each.view_count,
      thumbNailUrl: each.thumbnail_url,
    }))
    console.log(UpdatedData)
    this.setState({Videos: UpdatedData})
  }

  getFailureView = () => {
    this.setState({apistatus: apiStatusConstant.failure})
  }

  get = async () => {
    this.setState({apistatus: apiStatusConstant.loading})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.setState({apistatus: apiStatusConstant.success})
      this.getSuccessView(data)
    } else {
      this.getFailureView()
    }
  }

  Retry = () => {
    this.get()
  }

  FailureView = theme => (
    <DivFail theme1={theme}>
      <FailedImg
        src={
          theme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        }
        alt="failure view"
      />
      <Hea theme1={theme}>Oops! Something Went Wrong</Hea>
      <Pt theme1={theme}>
        We are having some troubles to complete your request. <br />
        Please try again.
      </Pt>
      <RetryBut type="button" onClick={this.Retry}>
        Retry
      </RetryBut>
    </DivFail>
  )

  LoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

  Finale = theme => {
    const {apistatus} = this.state
    switch (apistatus) {
      case apiStatusConstant.success:
        return this.SuccessView(theme)
      case apiStatusConstant.failure:
        return this.FailureView(theme)
      case apiStatusConstant.loading:
        return this.LoadingView()
      default:
        return null
    }
  }

  SuccessView = theme => {
    const {Videos} = this.state
    return (
      <DivBa theme1={theme} data-testid="gaming">
        <DivIco>
          <Icon size={28} />
          <Hea theme1={theme}>Gaming</Hea>
        </DivIco>
        <UnNone>
          <li>Hi</li>
        </UnNone>
        <Ul>
          {Videos.map(each => (
            <LinkItem to={`/videos/${each.id}`} key={each.id}>
              <Li key={each.id}>
                <GameImg src={each.thumbNailUrl} alt="video thumbnail" />
                <Para theme1={theme}>{each.title}</Para>
                <Para theme1={theme}>{each.views} Watching Worldwide</Para>
              </Li>
            </LinkItem>
          ))}
        </Ul>
      </DivBa>
    )
  }

  render() {
    return (
      <contextSave.Consumer>
        {value => {
          const {theme} = value
          return (
            <div>
              <Header />
              <DivRig>
                <div>
                  <Home />
                </div>
                {this.Finale(theme)}
              </DivRig>
            </div>
          )
        }}
      </contextSave.Consumer>
    )
  }
}
export default Gaming
