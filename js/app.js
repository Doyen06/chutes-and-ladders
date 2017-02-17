
var newGame;
var player1score = 0;
$(document).ready(function(board) {

newGame = new ChutesnLadders();

renderBoard();

$("button").click(function(){
  var diceNumber = rollDice();
  alert("You rolled " + diceNumber);
  console.log("number is" + diceNumber);
  newGame.movespot(diceNumber);
  renderBoard();
});

});

function renderBoard () {
  $('.gameBoard').empty();
  console.log("Board in app.js", newGame.board)
  newGame.board.forEach(function(row) {
    row.forEach(function (square) {

      var playerPosition= "box";

        //player 1 piece
      if (square === 1) {
        playerPosition = 'player-1';

          // empty slot
      }
      var squareInfo = "<div class= " + playerPosition + "></div>";
      $('.gameBoard').append(squareInfo);
    });
    });
  }

function rollDice() {
  player1score += 1;
   return Math.floor(Math.random() * 4) + 1;
}

// function loadSounds () {
//   ion.sound({
//     sounds: [ { name: 'snap' }, { name: 'tap' }, { name: 'beer_can_opening' }, ],
//     path: 'lib/ion-sound/sounds/',
//     preload: true,
//     volume: 1.0,
//   });
// }
