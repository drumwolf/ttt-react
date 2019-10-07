class TTTController {
  // each value represents an index of of TTT square
  corners = [0, 2, 6, 8];
  combinations = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
  ];

  move(moveCount, squares) {
    this.squares = squares;
    this.center  = squares[4];
    return (moveCount === 1) ? this.firstMove() : this.nextMove();
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
    return (this.center === '') ? 4 : this.availableCorner();
  }
  nextMove() {
    let defenseIndex = null;
    for (let i = 0; i < this.combinations.length; i++) {
      let XCount = 0, OCount = 0, emptyCount = 0, emptyIndex = null;
      this.combinations[i].forEach( index => {
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
  availableCorner() {
    const availableCorners = this.corners.filter( index => this.squares[index] === '' );
    const random = Math.floor( Math.random() * availableCorners.length );
    return this.corners[random];
  }
}

export default TTTController;
