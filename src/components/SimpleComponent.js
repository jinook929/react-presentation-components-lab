// Code SimpleComponent Here
import React, { Component } from 'react'

export class SimpleComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       mood: "happy"
    }
  }
  handleMoodClick = () => {
    this.setState(state => (state.mood === "happy" ? {mood: "sad"} : {mood: "happy"}))
  }
   render() {
    return (
      <div className="mood" onClick={this.handleMoodClick}>
        {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent
