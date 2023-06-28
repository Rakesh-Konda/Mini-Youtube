import {Component} from 'react'
import {parse, formatDistanceToNow, format} from 'date-fns'
import Home from '../Home'
import Header from '../Header'
import contextSave from '../../context/contextSave'
import {
  Div,
  Image,
  List,
  Un,
  Head,
  DivYear,
  RightPara,
  Mid,
  NoVideoImg,
  DivNo,
  Divv,
  PeT,
  HeT,
  Icon2,
  Headd,
  UnNone,
} from './styledComponent'

class SavedVideos extends Component {
  getYear = data => {
    const dateString = data
    const date = parse(dateString, 'MMM dd, yyyy', new Date())
    const distance = formatDistanceToNow(date)
    const yearsAgo = format(new Date(), 'yyyy') - format(date, 'yyyy')
    const yearsAgoText = `${Math.max(0, yearsAgo)} years ago`
    return yearsAgoText
  }

  render() {
    return (
      <contextSave.Consumer>
        {value => {
          const {savedList, theme} = value
          console.log(savedList)
          const NoVideos = savedList.length !== 0
          console.log(NoVideos)
          return (
            <Divv theme1={theme} data-testid="savedVideos">
              <Header />
              <DivYear>
                <div>
                  <Home />
                </div>
                {NoVideos ? (
                  <Un theme1={theme}>
                    <Div>
                      <Icon2 size={24} />
                      <Headd theme1={theme}>Saved Videos</Headd>
                    </Div>
                    <UnNone>
                      <li>Hi</li>
                      <li>Hi</li>
                    </UnNone>
                    <Un>
                      {savedList.map(each => (
                        <List key={each.id}>
                          <Mid>
                            <Image
                              src={each.thumbNailUrl}
                              alt="video thumbnail"
                            />
                            <div>
                              <PeT theme1={theme}>{each.title}</PeT>
                              <PeT theme1={theme}>{each.channelName}</PeT>
                              <DivYear>
                                <RightPara theme1={theme}>
                                  {each.views}Views
                                </RightPara>
                                <PeT theme1={theme}>
                                  {this.getYear(each.PublishedAt)}
                                </PeT>
                              </DivYear>
                            </div>
                          </Mid>
                        </List>
                      ))}
                    </Un>
                  </Un>
                ) : (
                  <DivNo>
                    <NoVideoImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <HeT theme1={theme}>No saved videos found</HeT>
                    <PeT theme1={theme}>
                      You can save your videos while watching them
                    </PeT>
                  </DivNo>
                )}
              </DivYear>
            </Divv>
          )
        }}
      </contextSave.Consumer>
    )
  }
}
export default SavedVideos
