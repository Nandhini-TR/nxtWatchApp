import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  state = {isLight: true, savedVideos: []}

  toggleTheme = () => {
    this.setState(prevState => ({isLight: !prevState.isLight}))
  }

  toggleSavedVideos = videoDetails => {
    this.setState(prevState => {
      const {savedVideos} = prevState
      const isVideoSaved = savedVideos.some(
        eachVideo => eachVideo.id === videoDetails.id,
      )

      if (isVideoSaved) {
        const updatedSavedVideos = savedVideos.filter(
          eachVideo => eachVideo.id !== videoDetails.id,
        )

        return {savedVideos: updatedSavedVideos}
      }

      return {savedVideos: [...savedVideos, videoDetails]}
    })
  }

  render() {
    const {isLight, savedVideos} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isLight,
          toggleTheme: this.toggleTheme,
          savedVideos,
          toggleSavedVideos: this.toggleSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
