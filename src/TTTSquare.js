import React, { Component } from 'react';

class TTTSquare extends Component {
  render() {
    // default class
    const classList = ['TTT-box'];
    // implement either 'winning-square' or 'game-over' class selectors (but not both)
    if (this.props.isWinningSquare) {
      classList.push(`TTT-winning-square-${this.props.char}`);
    } else if (this.props.isGameOver) {
      classList.push('TTT-game-over');
    }
    // disable square if it's filled
    if (this.props.char !== '') {
      classList.push('disabled');
    }
    // final component
    return (
      <div className={classList.join(' ')} data-index={this.props.index} onClick={this.props.onSquareClick}>
        <span className="TTT-char">{this.props.char}</span>
       </div>
     );
  }
}

export default TTTSquare;
