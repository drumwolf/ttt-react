import React, { Component } from 'react';
import TTTGrid from './TTTGrid';

class App extends Component {
  state = {
    squares: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
  }
  render() {
    return (
      <main className="md">
        <TTTGrid squares={this.state.squares} />
      </main>
    )
  }
}

export default App;
