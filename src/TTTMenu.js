import React, { Component } from 'react';

class TTTMenu extends Component {
  render() {
    return (
      <section className="TTT-menu">
        <button className="TTT-reset" onClick={this.props.onResetClick}>Reset Game</button>
        <div className="TTT-resize-container">
          <button className="TTT-resize" data-size="sm" onClick={this.props.onResizeClick}>Small</button> /
          <button className="TTT-resize" data-size="md" onClick={this.props.onResizeClick}>Medium</button> /
          <button className="TTT-resize" data-size="lg" onClick={this.props.onResizeClick}>Large</button>
        </div>
      </section>
    );
  }
}

export default TTTMenu;
