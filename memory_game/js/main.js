console.log ("Up and running")
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];
function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.")
	}
};
 
function flipCard() {
	var cardId = this.getAtrribute ('data-id');
	console.log("User flipped" + card[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	this.setAtrribute('src',cards[cardID].cardImage);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId.suit]);
}

