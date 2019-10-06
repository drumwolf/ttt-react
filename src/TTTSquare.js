import React, { Component } from 'react';

class TTTSquare extends Component {
  render() {
    return (
      <div className="TTT-box" data-index={this.props.index} onClick={this.props.onSquareClick}>
        <span className="TTT-char">{this.props.char}</span>
       </div>
     );
  }
}

export default TTTSquare;
