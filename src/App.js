import React, { Component } from 'react';
import TTTGrid from './TTTGrid';

class App extends Component {
  state = {
    moveCount: 0,
    squares: Array(9).fill(''),
    userMoves: true
  }
  componentDidUpdate() {
    this.nextMove();
  }
  onSquareClick(index) {
    if (this.state.squares[index] === '') {
      const moveCount = this.state.moveCount + 1;
      const squares   = this.state.squares.slice();
      const userMoves = !(this.state.userMoves);
      squares[index]  = 'X';
      this.setState({ moveCount, squares, userMoves });
    }
  }
  nextMove(squares) {
    if (!this.state.userMoves) {
      console.log("App's turn to move - this state: ", this.state);
    }
  }
  render() {
    return (
      <main className="md">
        <TTTGrid
          clickable={this.state.userMoves}
          squares={this.state.squares}
          onSquareClick={this.onSquareClick.bind(this)} />
      </main>
    )
  }
}

export default App;
