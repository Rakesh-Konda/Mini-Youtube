import {Component} from 'react'
import {parse, formatDistanceToNow, format} from 'date-fns'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Home from '../Home'
import Header from '../Header'
import contextSave from '../../context/contextSave'
import {
  Div,
  DivVideo,
  Head,
  Para,
  Like,
  DisLike,
  Save,
  DivLike,
  DivDisLike,
  LL,
  DivSide,
  ParaSave,
  Image,
  DivSub,
  ParaLast,
  DivFail,
  FailedImg,
  RetryBut,
  But,
  ButPara,
  DivLikSave,
  Paa,
  Like1,
  ButPara1,
  DisLike1,
  ButPara2,
  Pat,
  Hee,
  ParaHome,
  ButPara3,
} from './styledComponent'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    Videos: {},
    apistatus: apiStatusConstant.initial,
    saveColor: true,
    saveButton: true,
    likeColor: true,
    dislikeColor: true,
  }

  componentDidMount() {
    this.get()
  }

  Like = () => {
    this.setState(prevState => ({
      likeColor: !prevState.likeColor,
      dislikeColor: true,
    }))
  }

  DisLike = () => {
    this.setState(prevState => ({
      dislikeColor: !prevState.dislikeColor,
      likeColor: true,
    }))
  }

  getSuccessView = data => {
    const each = data.video_details
    const UpdatedData = {
      id: each.id,
      title: each.title,
      views: each.view_count,
      thumbNailUrl: each.thumbnail_url,
      PublishedAt: each.published_at,
      channelName: each.channel.name,
      channelImgUrl: each.channel.profile_image_url,
      subscribers: each.channel.subscriber_count,
      description: each.description,
      videoUrl: each.video_url,
    }
    console.log(UpdatedData)
    this.setState({Videos: UpdatedData})
  }

  getFailureView = () => {
    this.setState({apistatus: apiStatusConstant.failure})
  }

  get = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    this.setState({apistatus: apiStatusConstant.loading})

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
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

  LoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

  Retry = () => {
    this.get()
  }

  Finale = (saveItem, removeItem, theme) => {
    const {apistatus} = this.state
    switch (apistatus) {
      case apiStatusConstant.success:
        return this.SuccessView(saveItem, removeItem, theme)
      case apiStatusConstant.failure:
        return this.FailureView(theme)
      case apiStatusConstant.loading:
        return this.LoadingView()
      default:
        return null
    }
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
        We are having some trouble to complete your request. Please try again.
      </ParaHome>
      <RetryBut type="button" onClick={this.Retry}>
        Retry
      </RetryBut>
    </DivFail>
  )

  Save = saveItem => {
    console.log('save')
    const {Videos} = this.state
    this.setState(prevState => ({
      saveColor: !prevState.saveColor,
      saveButton: !prevState.saveButton,
    }))
    saveItem(Videos)
  }

  Saved = removeItem => {
    const {Videos} = this.state
    this.setState(prevState => ({
      saveColor: !prevState.saveColor,
      saveButton: !prevState.saveButton,
    }))
    removeItem(Videos)
  }

  SuccessView = (saveItem, removeItem, theme) => {
    const {Videos, saveColor, likeColor, dislikeColor, saveButton} = this.state

    return (
      <Div>
        <DivVideo theme1={theme} data-testid="videoItemDetails">
          <ReactPlayer url={Videos.videoUrl} controls />
          <Para theme1={theme}>{Videos.title}</Para>
          <DivSide>
            <Div>
              <Paa theme1={theme}>{Videos.views} Views</Paa>
              <Para theme1={theme}>{Videos.PublishedAt}</Para>
            </Div>
            <LL>
              {theme ? (
                <But onClick={this.Like}>
                  <DivLike>
                    <Like likeColor={likeColor} size={24} />
                    <ButPara likeColor={likeColor}>Like</ButPara>
                  </DivLike>
                </But>
              ) : (
                <But onClick={this.Like}>
                  <DivLike>
                    <Like1 likeColor={likeColor} size={24} />
                    <ButPara1 likeColor={likeColor}>Like</ButPara1>
                  </DivLike>
                </But>
              )}

              {theme ? (
                <But onClick={this.DisLike}>
                  <DivDisLike>
                    <DisLike dislikeColor={dislikeColor} size={24} />
                    <ButPara3 dislikeColor={dislikeColor}>Dislike</ButPara3>
                  </DivDisLike>
                </But>
              ) : (
                <But onClick={this.DisLike}>
                  <DivDisLike>
                    <DisLike1 dislikeColor={dislikeColor} size={24} />
                    <ButPara2 dislikeColor={dislikeColor}>Dislike</ButPara2>
                  </DivDisLike>
                </But>
              )}
              {saveButton ? (
                <But onClick={() => this.Save(saveItem)}>
                  <DivLikSave saveColor={saveColor} theme1={theme}>
                    <Save size={28} />
                    <ParaSave>Save</ParaSave>
                  </DivLikSave>
                </But>
              ) : (
                <But onClick={() => this.Saved(removeItem)}>
                  <DivLikSave saveColor={saveColor} theme1={theme}>
                    <Save size={28} />
                    <ParaSave>Saved</ParaSave>
                  </DivLikSave>
                </But>
              )}
            </LL>
          </DivSide>
          <hr />
          <DivSub>
            <Image src={Videos.channelImgUrl} alt="channel logo" />
            <div>
              <Para theme1={theme}>{Videos.channelName}</Para>
              <Pat theme1={theme}>{Videos.subscribers} subscribers</Pat>
            </div>
          </DivSub>
          <ParaLast theme1={theme}>{Videos.description}</ParaLast>
        </DivVideo>
      </Div>
    )
  }

  render() {
    const {Videos} = this.state

    return (
      <contextSave.Consumer>
        {value => {
          const {saveItem, removeItem, theme} = value
          return (
            <div>
              <Header />
              <Div>
                <div>
                  <Home />
                </div>
                {this.Finale(saveItem, removeItem, theme)}
              </Div>
            </div>
          )
        }}
      </contextSave.Consumer>
    )
  }
}

export default VideoItemDetails
