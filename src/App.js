import React, { Component } from 'react';
import TTTGrid from './TTTGrid';

class App extends Component {
  state = {
    squares: Array(9).fill('')
  }
  onSquareClick(index) {
    if (this.state.squares[index] === '') {
      const squares = this.state.squares.slice();
      squares[index] = 'X';
      this.setState({ squares: squares });
    }
  }
  render() {
    return (
      <main className="md">
        <TTTGrid
          squares={this.state.squares}
          onSquareClick={this.onSquareClick.bind(this)} />
      </main>
    )
  }
}

export default App;
