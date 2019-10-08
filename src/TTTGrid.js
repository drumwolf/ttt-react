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
    // initialize variables
    const squares = [],
          classList = ['TTT-grid'],
          onSquareClick = this.onSquareClick.bind(this),
          winningRow = this.props.winningRow || [];
    // css classes where applicable
    if (!this.props.clickable) { classList.push('disabled'); }
    // assemble collection of squares
    this.props.squares.forEach( (char, index) => {
      squares.push(<TTTSquare
        char={char}
        isGameOver={this.props.isGridFilled || winningRow.length === 3}
        isWinningSquare={ winningRow.indexOf(index) !== -1 }
        onSquareClick={onSquareClick}
        key={index}
        index={index} />);
    });
    // final component
    return (
      <div className={classList.join(' ')}>{squares}</div>
    );
  }
}

export default TTTGrid;
