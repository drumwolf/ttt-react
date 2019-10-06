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

    if (moveCount === 1) {
      return this.firstMove();
    } else {
      return this.defensiveMove();
    }
    return null;
  }
  firstMove() {
    return (this.center === '') ? 4 : this.availableCorner();
  }
  defensiveMove() {
    for (let i = 0, combo; i < this.combinations.length; i++) {
      combo = this.combinations[i];
      const availableSquares = combo.filter( index => this.squares[index] !== 'X' );
      if (availableSquares.length === 1 && this.squares[ availableSquares[0] ] === '' ) {
        return availableSquares[0];
      }
    }
    return null;
  }
  availableCorner() {
    const availableCorners = this.corners.filter( index => this.squares[index] === '' );
    const random = Math.floor( Math.random() * availableCorners.length );
    return this.corners[random];
  }
}

export default TTTController;
