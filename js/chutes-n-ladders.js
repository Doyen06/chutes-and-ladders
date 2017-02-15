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

   var board = this.board;
   var stop = 0;
   this.board.forEach(function (row, rowIndex) {

     row.forEach(function (cell, colIndex) {

     if (cell === 1) {

       console.log("current coords are " + rowIndex + " " + colIndex);
       if (rowIndex === 4 || rowIndex === 2 || rowIndex === 0) {
         if (colIndex - randomN < 0){
           if (colIndex === 0){

           console.log("triggered");
           board[rowIndex][colIndex] = null;
           console.log([rowIndex + 1]+ " " + [colIndex]);
           board[rowIndex - 1][(randomN - 1)] = 1;
            }
            else {
            var spot =  randomN - (colIndex + 1);
             board[rowIndex][colIndex] = null;
             board[(rowIndex - 1)][spot] = 1;
            }
         }

         else {
       board[rowIndex][colIndex] = null;
       board[rowIndex][colIndex - randomN] = 1;}

     }
      if (rowIndex === 3 || rowIndex === 1){
        if (stop === 0){
          if (colIndex + randomN > 4){
            if (colIndex === 4){
          console.log("odd");
        board[rowIndex][colIndex] = null;
        board[rowIndex - 1][(randomN- 1)] = 1;
          }

        else {
          console.log("why");
      var spot2 =  randomN - (colIndex + 1);
      board[rowIndex][colIndex] = null;
      board[(rowIndex - 1)][spot2] = 1;
      //board[rowIndex][colIndex + randomN] = 1;
      stop = 1;
    }
  }
      else {
    board[rowIndex][colIndex] = null;
    board[rowIndex][colIndex - randomN] = 1;}
     }
       }
     }

     }
   );
  }
