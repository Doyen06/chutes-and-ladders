
var newGame;

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

function loadSounds () {
  ion.sound({
    sounds: [ { name: 'snap' }, { name: 'tap' }, { name: 'beer_can_opening' }, ],
    path: 'lib/ion-sound/sounds/',
    preload: true,
    volume: 1.0,
  });
}
