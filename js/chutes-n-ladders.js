console.log ("please work");

function ChutesnLadders(){
  this.board = [
    [0, 4, null, null, null],
    [null, null, 4, null, null],
    [null, null, null, 3, null],
    [null, null, null, null, null],
    [null, 3, null, null, 1],
  ];

  this.player1="1";
  this.player2="2";

}

ChutesnLadders.prototype.movespot = function(randomN) {

  var board = this.board;
  var stop = 0;
  var isThereALadder;
  var isThereAChute;
  this.board.forEach(function(row, rowIndex) {

    row.forEach(function(cell, colIndex) {
      var newRow;
      var newCol;

      if (cell === 1) {
        console.log("current coords are " + rowIndex + " " + colIndex);
        if (rowIndex === 4 || rowIndex === 2 || rowIndex === 0) {
          console.log(board[rowIndex][colIndex + randomN]);
          if (board[rowIndex][colIndex + randomN] === 0){
            alert("You won!");
            return;
          }
          if (colIndex - randomN < 0) {
            if (rowIndex===0){
              alert("Nah buddy, try again!");
                return;
            }
            if (colIndex === 0) {

              console.log("triggered");
              board[rowIndex][colIndex] = null;
              console.log([rowIndex + 1] + " " + [colIndex]);
              isThereALadder = newGame._ladder(board[rowIndex - 1][(randomN - 1)]);
              if (isThereALadder === false) {
                board[rowIndex - 1][(randomN - 1)] = 1;
              } else {
                board[rowIndex - 2][(randomN - 1)] = 1;
              }


            } else {
              var spot = randomN - (colIndex + 1);
              board[rowIndex][colIndex] = null;

              isThereALadder = newGame._ladder(board[(rowIndex - 1)][spot]);
              if (isThereALadder === false) {
                board[(rowIndex - 1)][spot] = 1;
              } else {
                board[rowIndex - 2][(randomN - 1)] = 1;
              }
            }
          } else {
            isThereALadder = newGame._ladder(board[rowIndex][colIndex - randomN]);
              if (isThereALadder===false){
            board[rowIndex][colIndex] = null;
            board[rowIndex][colIndex - randomN]=1;
          } else {
            board[rowIndex][colIndex] = null;
            board[rowIndex-1][colIndex - randomN] = 1;
          }
        }
      }

        if (rowIndex === 3 || rowIndex === 1) {
          console.log("in odd rows");
          if (stop === 0) {
            console.log(colIndex + randomN > 4);
            if (colIndex + randomN > 4) {
              console.log("why");
              //working on this still
              newRow = (rowIndex - 1);
              newCol = (5 - (randomN - (4 - colIndex)));
              board[rowIndex][colIndex] = null;
              board[newRow][newCol] = 1;
              //board[rowIndex][colIndex + randomN] = 1;
            } else {
              console.log("this thing is getting triggered");
              board[rowIndex][colIndex] = null;
              newRow = rowIndex;
              newCol = colIndex + randomN;
              board[newRow][newCol] = 1;
            }

            isThereAChute = newGame._chute(board[newRow][newCol]);

            stop = 1;
          }
        }
      }
    });

});
};
  //end of move spot

  ChutesnLadders.prototype._ladder = function (position) {
     //var board = this.board;
console.log(position);
     if (position === null || position===4 || position===0){
       return false;
     } else if (position=== 3){
       alert("Cool, a ladder!")
       return true;
     }

//      this.board.forEach(function (row, rowIndex) {
//        row.forEach(function (cell, colIndex) {
//
//         if (this.board[rowIndex][colindex] === 1) {
//         this.board[rowIndex][colIndex] = null;
//         this.board[2][1] = 1;
//       }
//         else if (this.board[4][2] === 1) {
//         this.board[rowIndex][colIndex] = null;
//         this.board[1][3]= 1;
//       }
//
//     });
//
//
// });

};


 ChutesnLadders.prototype._chute = function (position) {

    if(position ===null){
      return false;
    } else if (position ===4){
      alert("Oh no, a chute!");
      return true;

    }


//    //var board = this.board;
//    this.board.forEach(function (row, rowIndex) {
//      row.forEach(function (cell, colIndex) {
//
//       if (this.board[0][2] === 1){
//       this.board[rowIndex][colIndex] = null;
//       this.board[3][0] = 1;
//     }
//
//       else if (this.board[3][2] === 1){
//       this.board[rowIndex][colIndex] = null;
//       this.board[4][1]= 1;
    };
