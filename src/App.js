import React, { Component } from 'react'
import './App.css'
import AudioPlayer from './components/AudioPlayer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Reading Game</h1>
        </header>
        <AudioPlayer />
      </div>
    )
  }
}

export default App
