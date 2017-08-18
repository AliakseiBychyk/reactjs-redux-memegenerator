import React, { Component } from 'react'


class MemeItem extends Component {
  constructor() {
    super()

    this.state = {
      hovered: false
    }
    this.hideText = this.hideText.bind(this)
  }

  hideText() {
    this.setState(prevState => ({
      hovered: !prevState.hovered
    }))
  }

  render() {
    return (
      <div
        className="meme-item"
        onMouseEnter={this.hideText}
        onMouseLeave={this.hideText}
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

export default MemeItem