import React, { Component } from 'react';

class TTTMenu extends Component {
  render() {
    return (
      <ul>
        <li><a href="#" onClick={this.props.onResetClick}>Reset Game</a></li>
        <li></li>
      </ul>
    );
  }
}

export default TTTMenu;
