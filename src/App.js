import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import HomeVideos from './components/HomeVideos'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import contextSave from './context/contextSave'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {savedList: [], theme: true}

  saveItem = Videos => {
    this.setState(prevState => ({
      savedList: [...prevState.savedList, Videos],
    }))
  }

  removeItem = Videos => {
    const {savedList} = this.state
    const updatedList = savedList.filter(each => each.id !== Videos.id)
    this.setState({savedList: updatedList})
  }

  Themes = () => {
    this.setState(prevState => ({
      theme: !prevState.theme,
    }))
  }

  render() {
    const {savedList, theme} = this.state
    console.log(theme)
    return (
      <contextSave.Provider
        value={{
          savedList,
          theme,
          saveItem: this.saveItem,
          removeItem: this.removeItem,
          Themes: this.Themes,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={HomeVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </contextSave.Provider>
    )
  }
}

export default App
