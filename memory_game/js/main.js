var cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-diamonds.png"
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png"
}
];

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

