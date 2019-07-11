var Cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png",
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png",
},
{
rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png",
},
{
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png",
},
];

var cardsInPlay = [];
var cardId;
cardsInPlay.push(rank[cardImage]);	
console.log("User flipped" + cardImage);
console.log("User flipped" + suit);
cardsInPlay;
function CheckForMatch() { ;
	CheckForMatch;
if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}

function flipCard(cardId) {;
	flipCard(0);
	flipCard(2);
	console.log("User flipped"+ Cards[cardId].rank);

	CheckForMatch;
}
