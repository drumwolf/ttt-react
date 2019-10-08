import React, { Component } from 'react';
import TTTController from './TTTController';
import TTTGrid from './TTTGrid';

class App extends Component {
  state = {
    isGridFilled: false,
    isUsersTurn: true,
    moveCount: 0,
    squares: Array(9).fill(''),
    winningRow: null
  }
  controller = new TTTController();

  componentDidUpdate() {
    // don't execute if there is a winning row or if grid is filled
    if (!this.state.winningRow && !this.state.isGridFilled) {
      // starting with 3rd set of moves, check to see if winning row
      if (this.state.moveCount >= 3) {
        const winningRow = this.controller.getWinningRow(this.state.squares);
        if (winningRow) { this.setState({ winningRow }) };
      }
      // starting with user's 5th move, check to see if grid is filled
      if (this.state.moveCount === 5) {
        const emptySquareCount = this.state.squares.filter( char => char === '' ).length;
        if (emptySquareCount === 0) { this.setState({ isGridFilled: true }) }
      }
      // only if it's the app's turn, and grid isn't filled and there isn't a winning row, should app move
      if (!this.state.isUsersTurn && !this.state.isGridFilled && !this.state.winningRows) {
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
          clickable={this.state.isUsersTurn && !this.state.winningRow && !this.state.isGridFilled}
          squares={this.state.squares}
          onSquareClick={this.userMoves.bind(this)}
          winningRow={this.state.winningRow} />
      </main>
    )
  }
}

export default App;
