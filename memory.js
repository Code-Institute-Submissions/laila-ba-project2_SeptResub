
document.addEventListener('DOMContentLoaded', () => {


//cards
const cardList = [
  {
    name:'black',
    img:'./assets/img/black.edit.png'
  },
  {
    name:'black',
    img:'./assets/img/black.edit.png'
  },
  {
    name:'blue',
    img:'./assets/img/blue.edit.png'
  },
  {
    name:'blue',
    img:'./assets/img/blue.edit.png'
  },
  {
    name:'green',
    img:'./assets/img/green.edit.png'
  },
  {
    name:'green',
    img:'./assets/img/green.edit.png'
  },
  {
    name:'orange',
    img:'./assets/img/orange.edit.png'
  },
  {
    name:'orange',
    img:'./assets/img/orange.edit.png'
  },
  {
    name:'purple',
    img:'./assets/img/purple.edit.png'
  },
  {
    name:'purple',
    img:'./assets/img/purple.edit.png'
  },
  {
    name:'yellow',
    img:'./assets/img/yellow.edit.png'
  },
  {
    name:'yellow',
    img:'./assets/img/yellow.edit.png'
  }
 ];



cardList.sort(()=> 0.5 - Math.random());

const game= document.querySelector('.game');
const resultDisplay= document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId= [];
let cardsWon = [];
let locked = false;

const movesCount = document.querySelector(".moves-counter");
let moves = 0;
const reset = document.querySelector(".reset-btn");

//game
function createGame(){
  for (let i = 0; i < cardList.length; i++){
    var card = document.createElement('img');
    card.setAttribute('src', './assets/img/random.png');
    card.setAttribute('class','game-cards');
    //give each card data id
    card.setAttribute('data-id', i);
    card.addEventListener('click',flipCard);
    game.appendChild(card);
  }
}


//will check for matches
function checkForMatch(){
  var cards= document.querySelectorAll('img.game-cards');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  console.log(cardsChosen[0], cardsChosen[1]);
  if (cardsChosen[0] === cardsChosen[1]){
    locked = false;
    movesCounter();
    cardsWon.push(cardsChosen);
  } else{
    locked = false;
    //flip the card around to play again
    cards[optionOneId].setAttribute('src','./assets/img/random.png');
    cards[optionTwoId].setAttribute('src','./assets/img/random.png');
    movesCounter();

  //clear the card array and start again
    cardsChosen=[];
    cardsChosenId= [];
}
    resultDisplay.textContent= cardsWon.length;
    //gives a point for every match
    if (cardsWon.length === cardList.length/2){
      //collected al cards in array
      $("#win-message").removeClass("d-none");
    }
}
//flips cards
function flipCard(){
  if(locked) return;
var cardId= this.getAttribute('data-id');
cardsChosen.push(cardList[cardId].name);
cardsChosenId.push(cardId);
//add img to square based on cardID
this.setAttribute('src', cardList[cardId].img);
if (cardsChosen.length === 2){
  //so it doesnt happen too quickly
  locked = true;
  setTimeout(checkForMatch,400);
}else{
  locked = false;
}
console.log(locked);
}


reset.addEventListener("click", resetEverything, );
function resetEverything() {
  $(".reset").click(function() {
    locked = false;
    cardList.sort(()=> 0.5 - Math.random());
    $("#win-message").css("display", "none");
    });
  game.innerHTML = "";
  createGame(game, cardList);

  moves = 0;
  movesCount.innerHTML = 0;
  cardsWon = [];
  result.innerHTML = 0;
  cardsChosen = [];
  cardsChosenId = [];
}


function movesCounter() {
  movesCount.innerHTML ++;

  moves ++;
}
createGame();
});
