import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import AudioPlayer from './components/AudioPlayer'
import WordList from './components/WordList'
import SpeechRecognition from 'react-speech-recognition'

const propTypes = {
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}


class App extends Component {
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Reading Game</h1>
        </header>
        <AudioPlayer />
        <WordList transcript={transcript} resetTranscript={resetTranscript} />
      </div>
    )
  }
}

App.propTypes = propTypes
export default SpeechRecognition(App)
