import React, { Component } from 'react';
import TTTController from './TTTController';
import TTTGrid from './TTTGrid';
import TTTMenu from './TTTMenu';

class App extends Component {
  defaultState = {
    isGridFilled: false,
    isUsersTurn: true,
    moveCount: 0,
    squares: Array(9).fill(''),
    winningRow: null
  };
  state = {...this.defaultState, size: 'md' };
  controller = new TTTController();

  componentDidUpdate() {
    /*** don't execute if there is a winning row or if grid is filled ***/
    if (!this.state.winningRow && !this.state.isGridFilled) {
      let winningRow, emptySquareCount;
      this.controller.setSquares(this.state.squares);
      // starting with 3rd set of moves, check to see if winning row
      if (this.state.moveCount >= 3) {
        winningRow = this.controller.getWinningRow();
        if (winningRow) { this.setState({ winningRow }) };
      }
      // starting with user's 5th move, check to see if grid is filled
      if (this.state.moveCount === 5) {
        emptySquareCount = this.state.squares.filter( char => char === '' ).length;
        if (emptySquareCount === 0) { this.setState({ isGridFilled: true }) }
      }
      // only if it's the app's turn, and grid isn't filled and there isn't a winning row, should app move
      if (!this.state.isUsersTurn && !winningRow && emptySquareCount !== 0) {
        this.appMoves();
      }
    }
  }
  appMoves() {
    const moveCount = this.state.moveCount;
    const squares   = this.state.squares.slice();
    const newIndex  = this.controller.getMove(moveCount);
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
  resetGame(e) {
    e.preventDefault();
    this.setState(this.defaultState);
  }
  resizeGame(e) {
    e.preventDefault();
    this.setState({ size: e.target.dataset.size });
  }
  render() {
    return (
      <main className={this.state.size}>
        <TTTGrid
          clickable={this.state.isUsersTurn && !this.state.winningRow && !this.state.isGridFilled}
          isGridFilled={this.state.isGridFilled}
          squares={this.state.squares}
          onSquareClick={this.userMoves.bind(this)}
          winningRow={this.state.winningRow} />
        <TTTMenu
          onResetClick={this.resetGame.bind(this)}
          onResizeClick={this.resizeGame.bind(this)} />
      </main>
    )
  }
}

export default App;
