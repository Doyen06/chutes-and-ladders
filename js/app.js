
var newGame;

$(document).ready(function(board) {

newGame = new ChutesnLadders();
var diceNumber = rollDice();
renderBoard();
newGame.movespot(diceNumber);

});



function renderBoard () {
  $('.gameBoard').empty();

  newGame.board.forEach(function(row) {
    row.forEach(function (square) {

      var playerPosition= "box";

        //player 1 piece
      if (square === 1) {
        playerPosition = 'player-1';

        //player 2 piece
      } else if (square === 2) {
        playerPosition = 'player-2';

          // empty slot
      }
      var squareInfo = "<div class= " + playerPosition + "></div>";
      $('.gameBoard').append(squareInfo);
    });
    });
  }

function rollDice() {

   return Math.floor(Math.random() * 4) + 1;
}


//$(".dice").onclick(function());
