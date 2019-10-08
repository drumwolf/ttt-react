/*
This is not a React component.  It is essentially the "brain" of the app which will determine the following:
- what square to pick when it moves
- whether or not there is a winning row combination

This class was designed with the following assumptions:
- user player will move first, app player will move afterwards
- user will be 'X', app will be 'O'

*/
class TTTController {
  // each value represents an index of of TTT square
  corners = [0, 2, 6, 8];
  rows = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
  ];
  squares = [];

  /*** 'squares' will show what values 'X', 'O' or '' are in which squares ***/
  setSquares(squares) {
    this.squares = squares;
  }

  /*** determine which square the app will select, and return the square's index ***/
  getMove(moveCount) {
    this.center  = this.squares[4];
    return (moveCount === 1) ? this.firstMove() : this.nextMove();
  }
  // second-level auxiliary methods to be called (directly or not) by 'getMove()'
  cornerMove() {
    const cornerMoves = this.corners.filter( index => this.squares[index] === '' );
    const random = Math.floor( Math.random() * cornerMoves.length );
    return this.corners[random];
  }
  defaultMove() {
    const indices = [];
    this.squares.forEach( (char, index) => {
      if (char === '') { indices.push(index) }
    });
    const random = Math.floor( Math.random() * indices.length );
    return indices[random];
  }
  firstMove() {
    return (this.center === '') ? 4 : this.cornerMove();
  }
  nextMove() {
    let defenseIndex = null;
    for (let i = 0; i < this.rows.length; i++) {
      let XCount = 0, OCount = 0, emptyCount = 0, emptyIndex = null;
      this.rows[i].forEach( index => {
        if (this.squares[index] === 'X') { XCount++; }
        if (this.squares[index] === 'O') { OCount++; }
        if (this.squares[index] === '') { emptyCount++; emptyIndex = index; }
      })
      /* go on offensive immediately if there is an opportunity */
      if (OCount === 2 && emptyCount === 1) {
        return emptyIndex;
      }
      /* if app needs to make a defensive move, wait for the whole loop to see if there's also an opening for an attack */
      else if (XCount === 2 && emptyCount === 1) {
        defenseIndex = emptyIndex;
      }
    }
    return (defenseIndex) ? defenseIndex : this.defaultMove();
  }

  /*** determine if there is a winning row, and if so, return an array of its indices ***/
  getWinningRow(squares) {
    for (let i = 0, row; i < this.rows.length; i++) {
      row = this.rows[i].map( index => this.squares[index] );
      if (row[0] !== '' && row[0] === row[1] && row[1] === row[2] ) {
        return this.rows[i];
      }
    }
    return null;
  }

}

export default TTTController;
