import React, { Component } from 'react';

class TTTSquare extends Component {
  render() {
    const classList = ['TTT-box'];
    if (this.props.isWinningSquare) {
      classList.push(`TTT-winning-square-${this.props.char}`);
    }
    return (
      <div className={classList.join(' ')} data-index={this.props.index} onClick={this.props.onSquareClick}>
        <span className="TTT-char">{this.props.char}</span>
       </div>
     );
  }
}

export default TTTSquare;
