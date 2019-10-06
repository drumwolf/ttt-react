import React, { Component } from 'react';
import TTTSquare from './TTTSquare';

class TTTGrid extends Component {
  render() {
    const squares = [];
    for (let i in this.props.squares) {
      squares.push(<TTTSquare char={this.props.squares[i]} />);
    }
    return (
      <div className="TTT-grid">{squares}</div>
    );
  }
}

export default TTTGrid;
