import React, { Component } from 'react';
import TTTSquare from './TTTSquare';

class TTTGrid extends Component {
  constructor(props) {
    super(props);
  }
  onSquareClick(e) {
    this.props.onSquareClick(e.target.dataset.index);
  }
  render() {
    const squares = [];
    for (let i in this.props.squares) {
      squares.push(<TTTSquare
        char={this.props.squares[i]}
        onSquareClick={this.onSquareClick.bind(this)}
        key={i}
        index={i} />);
    }
    return (
      <div className="TTT-grid">{squares}</div>
    );
  }
}

export default TTTGrid;
