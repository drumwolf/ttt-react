import React, { Component } from 'react';
import TTTController from './TTTController';
import TTTGrid from './TTTGrid';

class App extends Component {
  state = {
    moveCount: 0,
    squares: Array(9).fill(''),
    usersTurn: true
  }
  controller = new TTTController();

  componentDidUpdate() {
    this.appMoves();
  }
  appMoves(squares) {
    if (!this.state.usersTurn) {
      const moveCount = this.state.moveCount;
      const squares   = this.state.squares.slice();
      const newIndex = this.controller.move(moveCount, squares);
      squares[newIndex] = 'O';
      setTimeout( () => this.setState({ squares, usersTurn: true }), 500);
    }
  }
  userMoves(index) {
    if (this.state.squares[index] === '') {
      const moveCount = this.state.moveCount + 1;
      const squares   = this.state.squares.slice();
      squares[index]  = 'X';
      this.setState({ moveCount, squares, usersTurn: false });
    }
  }
  render() {
    return (
      <main className="md">
        <TTTGrid
          clickable={this.state.usersTurn}
          squares={this.state.squares}
          onSquareClick={this.userMoves.bind(this)} />
      </main>
    )
  }
}

export default App;
