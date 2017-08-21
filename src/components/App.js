import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/index.css'
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import MemeItem from './MemeItem'
import MyMemes from './MyMemes'


class App extends Component {
  constructor() {
    super()

    this.state = {
      memeLimit: 10,
      text0: '',
      text1: ''
    } 

    this.showTenMore = this.showTenMore.bind(this)
  }

  showTenMore = () => {
    this.setState(prevState => ({
      memeLimit: prevState.memeLimit + 10
    }))
  }

  render() {
    return (
      <div>
        <h2><u>Welcome to the Meme Generator!</u></h2>
        <MyMemes />
        <h4><i>Write Some Text</i></h4>
        <Form inline>
          <FormGroup>
            <ControlLabel>Top</ControlLabel>
            {' '}
            <FormControl
              type="text"
              onChange={event => this.setState({text0: event.target.value})}
            ></FormControl>
          </FormGroup>  
          {' '}
          <FormGroup>
            <ControlLabel>Bottom</ControlLabel>
            {' '}
            <FormControl
              type="text"
              onChange={event => this.setState({text1: event.target.value})}
            ></FormControl>
          </FormGroup>
        </Form>  
        {
          this.props.memes.map((meme, i) => {
            return (
              <MemeItem
                key={i}
                meme={meme}
                text0={this.state.text0}
                text1={this.state.text1}
              /> 
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