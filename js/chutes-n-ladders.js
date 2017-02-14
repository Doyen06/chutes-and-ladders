console.log ("please work");

function ChutesnLadders(){
  this.board = [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, 1],
  ];

  this.player1="1";
  this.player2="2";

}

ChutesnLadders.prototype.movespot = function (randomN) {
  console.log("hello world " + randomN);

   var board = this.board;

   this.board.forEach(function (row, rowIndex) {

     row.forEach(function (cell, colIndex) {

     if (cell === 1) {
       if (colIndex + randomN > 4){
         board[rowIndex][colIndex] = null;
         board<YOU CAN DO IT>
       }

       else {
     board[rowIndex][colIndex] = null;
     board[rowIndex][colIndex - randomN] = 1;}

    }
       });
       });
       renderBoard();
     };
