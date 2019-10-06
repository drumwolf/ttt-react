import React, { Component } from 'react';

class TTTSquare extends Component {
  render() {
    return (<div className="TTT-box"><span className="TTT-char">{this.props.char}</span></div>);
  }
}

export default TTTSquare;
