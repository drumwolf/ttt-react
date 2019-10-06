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
    const squares = [],
          classList = ['TTT-grid'],
          onSquareClick = this.onSquareClick.bind(this);
    if (!this.props.clickable) { classList.push('disabled'); }
    this.props.squares.forEach( (char, index) => {
      squares.push(<TTTSquare
        char={char}
        onSquareClick={onSquareClick}
        key={index}
        index={index} />);
    });
    return (
      <div className={classList.join(' ')}>{squares}</div>
    );
  }
}

export default TTTGrid;
