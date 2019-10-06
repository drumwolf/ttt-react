class TTTController {
  corners = [0, 2, 6, 8];

  move(moveCount, squares) {
    this.squares = squares;
    if (moveCount === 1) {
      return this.firstMove();
    }
    return null;
  }
  firstMove() {
    if (this.squares[4] === '') {
      return 4;
    } else {
      const random = Math.floor( Math.random() * this.corners.length );
      return this.corners[random];
    }
  }
}

export default TTTController;
