import React from 'react'

class AudioPlayer extends React.Component {

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({
      audio: true, video: false
    })
    .then(this.handleSuccessfulRecording)
  }

  handleSuccessfulRecording(stream) {
    const player = document.getElementById('player')
    if (window.URL) {
      player.src = window.URL.createObjectURL(stream)
    } else {
      player.src = stream
    }
  }

  render() {
    return (
      <audio id='player' controls></audio>
    )
  }
}

export default AudioPlayer
