document.addEventListener('DOMContentLoaded', ()=>{

//cards
const cardArray = [
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
  },
]

const game= document.querySelector('game')
//game
//loop over card array + create image elements
  for (let i = 0; i < cardArray.length; i++){
    var card = document.createElement('img')
    card.setAttribute('src', 'img/random.png')
    card.setAttribute('data-id', i)
    //card.addEventListener('click',flipcard)
    game.appendChild(card)
  }
})
createBoard()
