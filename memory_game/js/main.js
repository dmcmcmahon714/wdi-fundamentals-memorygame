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
	cardImage:"images/king-of-hearts.png"
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
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
	}
};
 
function flipCard() {
	var cardId = this.getAtrribute('data-id');
	cardsInPlay.push(cards[cardID].rank);
	console.log("User flipped" + card[cardID].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId.suit]);
	this.setAtrribute('src',cards[cardID].cardImage);

	if (cardsInPlay.length ===2) {
		checkForMatch();
	}
}

function createBoard = () => {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.creatElement('img');
		cardElement.setAtrribute('src', "images/back.png");
		cardElement.setAtrribute('data-id', i);
		document.getElementById('game-board') .appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);

	}
}
createBoard();
