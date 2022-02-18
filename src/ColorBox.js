import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    console.log(this.props.opacity)
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
      {this.props.opacity >= 0.2 ?    <ColorBox opacity={Number((this.props.opacity-0.1).toFixed(1))} />   : null /*console.log(this.props.opacity)*/ }
              
      </div>
    )
  }

}
