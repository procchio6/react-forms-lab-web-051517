import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false
    };
  }

  handlePoemChange = (event) => {
    const poem = event.target.value
    this.setState({
      poem,
      valid: this.isValidPoem(poem)
    })
  }

  wordCount = poemLine => {
    if (poemLine) {
      return poemLine.split(' ').length
    }
  }

  isValidPoem = (poem) => {
    const poemLines = poem.split('\n').map(line => line.trim())
    const correctWordCount = this.wordCount(poemLines[0]) === 5 &&
      this.wordCount(poemLines[1]) === 3 && this.wordCount(poemLines[2]) === 5

    if (poemLines.length === 3 && correctWordCount) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.handlePoemChange}
        />
        { !this.state.valid &&
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
            >
              This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
