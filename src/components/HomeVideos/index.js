import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {parse, formatDistanceToNow, format} from 'date-fns'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Home from '../Home'
import Header from '../Header'
import contextSave from '../../context/contextSave'

import {
  RightDiv,
  BackgroundImageDiv,
  Img1,
  Para,
  Button,
  CloseButton,
  BelowDiv,
  SearchInput,
  DivInp,
  SearchBut,
  UnorderList,
  VideoImg,
  List,
  ChannelImg,
  DivChannelUrl,
  DivYear,
  FailedImg,
  RetryBut,
  DivFail,
  DivMain,
  LinkItemHome,
  ParaHome,
  Hee,
  Back,
  UnNone,
} from './styledComponent'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class HomeVideos extends Component {
  state = {
    showBanner: true,
    SearchValue: '',
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
    const {SearchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${SearchValue}`
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

  CloseBanner = () => {
    this.setState({showBanner: false})
  }

  getYear = data => {
    const dateString = data
    const date = parse(dateString, 'MMM dd, yyyy', new Date())
    const distance = formatDistanceToNow(date)
    const yearsAgo = format(new Date(), 'yyyy') - format(date, 'yyyy')
    const yearsAgoText = `${Math.max(0, yearsAgo)} years ago`
    return yearsAgoText
  }

  searchValue = event => {
    this.setState({SearchValue: event.target.value})
  }

  getResults = () => {
    this.get()
  }

  Retry = () => {
    this.get()
  }

  FailureView = theme => (
    <Back theme1={theme}>
      <DivFail>
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
    </Back>
  )

  LoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

  SuccessView = theme => {
    const {Videos} = this.state
    const VideosAreThere = Videos.length === 0
    return (
      <div>
        <UnNone>
          <li>Hi</li>
        </UnNone>
        {VideosAreThere ? (
          <DivFail>
            <FailedImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <h1>No Search results found</h1>
            <p>Try different key words or remove search filter</p>
            <RetryBut type="button" onClick={this.Retry}>
              Retry
            </RetryBut>
          </DivFail>
        ) : (
          <BelowDiv theme1={theme} data-testid="home">
            <div>
              <UnorderList>
                {Videos.map(each => (
                  <LinkItemHome to={`videos/${each.id}`} key={each.id}>
                    <List key={each.id}>
                      <VideoImg src={each.thumbNailUrl} alt="video thumbnail" />
                      <DivChannelUrl>
                        <ChannelImg
                          src={each.channelImgUrl}
                          alt="channel logo"
                        />
                        <div>
                          <ParaHome theme1={theme}>{each.title}</ParaHome>
                          <ParaHome theme1={theme}>{each.channelName}</ParaHome>
                          <DivYear>
                            <ParaHome theme1={theme}>
                              {each.views} Views
                            </ParaHome>
                            <ParaHome theme1={theme}>
                              {this.getYear(each.PublishedAt)}
                            </ParaHome>
                          </DivYear>
                        </div>
                      </DivChannelUrl>
                    </List>
                  </LinkItemHome>
                ))}
              </UnorderList>
            </div>
          </BelowDiv>
        )}
      </div>
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
          const {showBanner} = this.state
          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken === undefined) {
            return <Redirect to="/login" />
          }
          return (
            <>
              <Header />
              <DivMain>
                <Home />
                <RightDiv theme1={theme}>
                  <div>
                    {showBanner && (
                      <BackgroundImageDiv data-testid="banner">
                        <div>
                          <Img1
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="nxt watch logo"
                          />
                          <Para>
                            Buy Nxt Watch Premium prepaid plans with <br />
                            UPI
                          </Para>
                          <Button type="button">GET IT NOW</Button>
                        </div>
                        <div>
                          <CloseButton
                            data-testid="close"
                            type="button"
                            onClick={this.CloseBanner}
                          >
                            <AiOutlineClose size={24} />
                          </CloseButton>
                        </div>
                      </BackgroundImageDiv>
                    )}
                  </div>
                  <DivInp theme1={theme}>
                    <SearchInput
                      theme1={theme}
                      type="search"
                      placeholder="Search"
                      onChange={this.searchValue}
                    />
                    <SearchBut
                      data-testid="searchButton"
                      theme1={theme}
                      type="button"
                      onClick={this.getResults}
                    >
                      <AiOutlineSearch />
                    </SearchBut>
                  </DivInp>
                  {this.Finale(theme)}
                </RightDiv>
              </DivMain>
            </>
          )
        }}
      </contextSave.Consumer>
    )
  }
}

export default HomeVideos
