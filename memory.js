
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
]

cardList.sort(()=> 0.5 - Math.random())

const game= document.querySelector('.game')
const resultDisplay= document.querySelector('#result')
var cardsChosen = []
var cardsChosenId= []
var cardsWon = []

//game
//loop over card array + create image elements
function createGame(){
  for (let i = 0; i < cardList.length; i++){
    var card = document.createElement('img')
    card.setAttribute('src', './assets/img/random.png')
    //give each card data id
    card.setAttribute('data-id', i)
    card.addEventListener('click',flipCard)
    game.appendChild(card)
  }
}

//will check for matches
function checkForMatch(){
  var cards= document.querySelectorAll('img')
  const optionOne = cardsChosenId[0]
  const optionTwo = cardsChosenId[1]

  if (cardsChosen[0] === cardsChosen[1]){
    //alert('You found a match!')
    cards[optionOne].setAttribute('src','./assets/img/blank.png')
    cards[optionTwo].setAttribute('src', './assets/img/blank.png')
    cardsWon.push(cardsChosen)
  } else{
    //flip the card around to play again
    cards[optionOne].setAttribute('src','./assets/img/random.png' )
    cards[optionTwo].setAttribute('src','./assets/img/random.png' )
    //alert('sorry, try again')
  }
    cardsChosen=[]
    cardsChosenId= []
    resultDisplay.textContent= cardsWon.length
    //gives a point for every match
    if (cardsWon.length === cardsList.length/2){
      //collected al cards in array
      resultDisplay.textContent = 'Congratulations! You found all the matches'
    }
}
//flips cards
function flipCard(){
var cardId= this.getAttribute('data-id')
cardsChosen.push(cardList[cardId].name)
cardsChosenId.push(cardId)
//add img to square based on cardID
this.setattribute('src', cardList[cardId].img)
if (cardsChosen.length ===2){
  //so it doesnt happen too quickly
  setTimeout(checkForMatch,500)
}
})
createGame()
