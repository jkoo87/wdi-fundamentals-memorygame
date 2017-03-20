console.log("JS file is connected to HTML! Woo!")
var cardOne = 'king'
var cardTwo = 'queen'
var cardThree = 'queen'
var cardFour = 'king'

if (cardOne === cardFour) {
	alert('You found a match!');
} else if (cardTwo === cardThree) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}

var board = document.getElementById('game-board');
function createCards () {
	for (var i=0; i<cards.length; 1++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		board.appendChild(cardElement);
	}
}