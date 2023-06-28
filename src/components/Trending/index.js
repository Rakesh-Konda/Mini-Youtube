import {Component} from 'react'
import {parse, formatDistanceToNow, format} from 'date-fns'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Home from '../Home'
import Header from '../Header'
import contextSave from '../../context/contextSave'

import {
  Ul,
  Air,
  MainDivEle,
  IconDiv,
  TrendImage,
  TrendList,
  He,
  Hlo,
  Widthdiv,
  ParaLeft,
  DivFail,
  RetryBut,
  FailedImg,
  LinkItem,
  HeaT,
  Back,
  ParaT,
  Hee,
  ParaHome,
  UnNone,
} from './styledComponent'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Trending extends Component {
  state = {
    Videos: [],
    apistatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.get()
  }

  getSuccessView = data => {
    const UpdatedData = data.videos.map(each => ({
      id: each.id,
      title: each.title,
      views: each.view_count,
      thumbNailUrl: each.thumbnail_url,
      PublishedAt: each.published_at,
      channelName: each.channel.name,
      channelImgUrl: each.channel.profile_image_url,
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
    const url = 'https://apis.ccbp.in/videos/trending'
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

  getYear = data => {
    const dateString = data
    const date = parse(dateString, 'MMM dd, yyyy', new Date())
    const distance = formatDistanceToNow(date)
    const yearsAgo = format(new Date(), 'yyyy') - format(date, 'yyyy')
    const yearsAgoText = `${Math.max(0, yearsAgo)} years ago`
    return yearsAgoText
  }

  Retry = () => {
    this.get()
  }

  FailureView = theme => (
    <DivFail theme1={theme}>
      (
      <FailedImg
        src={
          theme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        }
        alt="failure view"
      />
      <Hee theme1={theme}>Oops! Something Went Wrong</Hee>
      <ParaHome theme1={theme}>
        We are having some troubles to complete your request. <br />
        Please try again.
      </ParaHome>
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

  SuccessView = theme => {
    const {Videos} = this.state
    return (
      <Back theme1={theme} data-testid="trending">
        <IconDiv>
          <Air size={24} />
          <HeaT theme1={theme}>Trending</HeaT>
        </IconDiv>
        <UnNone>
          <li>Hi</li>
        </UnNone>
        <Ul>
          {Videos.map(each => (
            <LinkItem to={`videos/${each.id}`} key={each.id}>
              <TrendList key={each.id}>
                <Hlo>
                  <TrendImage src={each.thumbNailUrl} alt="video thumbnail" />
                  <Widthdiv>
                    <ParaT theme1={theme}>{each.title}</ParaT>
                    <ParaT theme1={theme}>{each.channelName}</ParaT>
                    <IconDiv>
                      <ParaT theme1={theme}>{each.views} Views</ParaT>
                      <ParaLeft theme1={theme}>
                        {this.getYear(each.PublishedAt)}
                      </ParaLeft>
                    </IconDiv>
                  </Widthdiv>
                </Hlo>
              </TrendList>
            </LinkItem>
          ))}
        </Ul>
      </Back>
    )
  }

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

  render() {
    return (
      <contextSave.Consumer>
        {value => {
          const {theme} = value
          return (
            <div>
              <Header />
              <MainDivEle>
                <div>
                  <Home />
                </div>
                {this.Finale(theme)}
              </MainDivEle>
            </div>
          )
        }}
      </contextSave.Consumer>
    )
  }
}
export default Trending
