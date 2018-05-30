import React from 'react'

class WordList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: ['cat', 'dog', 'elephant'],
      currentIndex: 0,
      transcript: props.transcript
    }

    this.renderFeedback = this.renderFeedback.bind(this)
  }

  componentWillReceiveProps(newProps) {
    let lastWord
    if (newProps.transcript.includes(' ')) {
      const arr = newProps.transcript.split(' ')
      lastWord = arr[arr.length - 1]
    } else {
      lastWord = newProps.transcript
    }

    this.setState({
      transcript: lastWord
    })
  }

  renderFeedback() {
    const feedback = this.state.transcript === this.state.words[this.state.currentIndex] ? 'Great!' : 'Oh no!'
    return (<div>{feedback}</div>)
  }

  render() {
    return (
      <div>
        <h2>{this.state.words[this.state.currentIndex]}</h2>
        <button onClick={() => {
          this.props.resetTranscript()

          this.setState({
            currentIndex: ++this.state.currentIndex % 3,
            transcript: this.props.transcript
          })
        }}>
        Next Word
        </button>
        <div className='feedback'>{this.state.transcript}</div>
        {this.renderFeedback()}
      </div>
    )
  }
}

export default WordList
