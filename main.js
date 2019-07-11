const cardsArray = [
  {
    rank: 'queen',
    suit: 'hearts',
    img: 'images/queen-of-hearts.png',
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    img: 'images/queen-of-diamonds.png',
  },
  {
    rank: 'king',
    suit: 'hearts',
    img: 'images/king-of-hearts.png',
  },
  {
    rank: 'king',
    suit: 'diamonds',
    img: 'images/king-of-diamonds.png',
  },
]

const gameGrid = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

// Grab the div with an id of root
const game = document.getElementById('game')

// Create a section with a class of grid
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')
game.appendChild(grid);


// For each item in the cardsArray array
  gameGrid.forEach(item => {
  const { rank, img } = item;
  // Create a div
  const card = document.createElement('div')

  // Apply a card class to that div
  card.classList.add('card')

  // Set the data-name attribute of the div to the cardsArray name
  card.dataset.rank = item.rank

  // Apply the background image of the div to the cardsArray image
  card.style.backgroundImage = `url(${item.img})`

  // Append the div to the grid section
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  const selected = document.querySelectorAll('.selected')
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected')
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', event => {
  // The event target is our clicked item
    const clicked = event.target;

if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.rank;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.rank;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }

});


