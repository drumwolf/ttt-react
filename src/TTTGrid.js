import React, { Component } from 'react';

class TTTGrid extends Component {
  constructor(props) {
  	super(props);
  }
  render() {
  	const squares = [];
  	for (let i in this.props.squares) {
  	  const char = this.props.squares[i];
  	  squares.push(<div className="TTT-box"><span className="TTT-char">{char}</span></div>);
  	}
    return (
      <div className="TTT-grid">{squares}</div>
    );
  }
}

export default TTTGrid;
