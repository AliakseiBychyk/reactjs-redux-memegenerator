import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/index.css'

import MemeItem from './MemeItem'


class App extends Component {
  constructor() {
    super()

    this.state = {
      memeLimit: 10
    } 

    this.showTenMore = this.showTenMore.bind(this)
  }

  showTenMore() {
    this.setState(prevState => ({
      memeLimit: prevState.memeLimit + 10
    }))
  }

  render() {
    return (
      <div>
        <h2>Welcome to the Meme Generator!</h2>
        {
          this.props.memes.map((meme, i) => {
            return (
              <MemeItem key={i} meme={meme} /> 
            )
          }).slice(0, this.state.memeLimit)
        }
        <div className="meme-button" onClick={this.showTenMore}>Load 10 more memes...</div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, null)(App)