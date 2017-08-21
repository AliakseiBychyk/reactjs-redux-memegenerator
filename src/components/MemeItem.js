import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMeme } from '../actions'


class MemeItem extends Component {
  constructor() {
    super()

    this.state = {
      hovered: false
    }
    this.hideText = this.hideText.bind(this)
    this.postMeme = this.postMeme.bind(this)
  }

  hideText = () => {
    this.setState(prevState => ({
      hovered: !prevState.hovered
    }))
  }

  postMeme = () => {
    console.log('this.props ', this.props)
    console.log(this.props.text0, ' ', this.props.text1)
    const { text0, text1 } = this.props
    const memeObj = {
      template_id: this.props.meme.id,
      text0,
      text1
    }
    this.props.createMeme(memeObj)
  }

  render() {
    return (
      <div
        className="meme-item"
        onMouseEnter={this.hideText}
        onMouseLeave={this.hideText}
        onClick={this.postMeme}
      >
        <img
          src={this.props.meme.url}
          alt={this.props.meme.name}
          className={this.state.hovered ? "meme-img darken-img" : "meme-img"}
        />
        <p className={this.state.hovered ? "meme-txt" : "no-txt"}>
          {this.props.meme.name}
        </p>
      </div>
    )
  }
}

export default connect(null, { createMeme })(MemeItem)