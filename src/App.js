import React, { Component } from 'react';
import TTTController from './TTTController';
import TTTGrid from './TTTGrid';

class App extends Component {
  state = {
    moveCount: 0,
    squares: Array(9).fill(''),
    isUsersTurn: true,
    winningRow: null
  }
  controller = new TTTController();

  componentDidUpdate() {
    // check if winning row exists
    if (!this.state.winningRow) {
      if (this.state.moveCount >= 3) {
        const winningRow = this.controller.getWinningRow(this.state.squares);
        if (winningRow) { this.setState({ winningRow }) };
      }
      if (!this.state.isUsersTurn) {
        this.appMoves();
      }
    }
  }
  appMoves() {
    const moveCount = this.state.moveCount;
    const squares   = this.state.squares.slice();
    const newIndex = this.controller.move(moveCount, squares);
    squares[newIndex] = 'O';
    setTimeout( () => this.setState({ squares, isUsersTurn: true }), 500);
  }
  userMoves(index) {
    if (this.state.squares[index] === '') {
      const moveCount = this.state.moveCount + 1;
      const squares   = this.state.squares.slice();
      squares[index]  = 'X';
      this.setState({ moveCount, squares, isUsersTurn: false });
    }
  }
  render() {
    return (
      <main className="md">
        <TTTGrid
          clickable={this.state.isUsersTurn && !this.state.winningRow}
          squares={this.state.squares}
          onSquareClick={this.userMoves.bind(this)}
          winningRow={this.state.winningRow} />
      </main>
    )
  }
}

export default App;
