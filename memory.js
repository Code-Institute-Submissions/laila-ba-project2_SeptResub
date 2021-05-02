document.addEventListener('DOMContentLoaded', ()=>{

//cards
const cardArray = [
  {
    name:'black',
    img:'img/black.edit.png'
  },
  {
    name:'black',
    img:'img/black.edit.png'
  },
  {
    name:'blue',
    img:'img/blue.edit.png'
  },
  {
    name:'blue',
    img:'img/blue.edit.png'
  },
  {
    name:'green',
    img:'img/green.edit.png'
  },
  {
    name:'green',
    img:'img/green.edit.png'
  },
  {
    name:'orange',
    img:'img/orange.edit.png'
  },
  {
    name:'orange',
    img:'img/orange.edit.png'
  },
  {
    name:'purple',
    img:'img/purple.edit.png'
  },
  {
    name:'purple',
    img:'img/purple.edit.png'
  },
  {
    name:'yellow',
    img:'img/yellow.edit.png'
  },
  {
    name:'yellow',
    img:'img/yellow.edit.png'
  },
]

const game= document.querySelector('game')
//game
//loop over card array + create image elements
  for (let i = 0; i < cardArray.length; i++){
    var card = document.createElement('img')
    card.setAttribute('src', 'img/blank.png')
    card.setAttribute('data-id', i)
    //card.addEventListener('click',flipcard)
    game.appendChild(card)
  }
}
createBoard()
