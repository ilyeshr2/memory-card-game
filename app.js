let score=0

function main(){
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

let flipedCards=[]
let loose=false
let gameFinished=false
//let blankCardsArr=[]
//let firstBoardIsUp=true
let count=0


cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const gameState = document.querySelector('#state')
const result = document.querySelector('#result')

function restartgame(){
  setTimeout(() => {
    delBoard()
    gameState.innerText="loading for another game!!!"
    setTimeout(()=>{
      main(cardArray)
    },2000)
    
  }, 2000);
}
function delBoard(){
  //for (let i = 0; i < cardArray.length; i++) {
    gridDisplay.innerHTML=''
  //}
}
function createBoard1() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', `${cardArray[i].img}`)
    card.setAttribute('id', i)
    //card.addEventListener('click',flipCard)
    gridDisplay.appendChild(card)
  }
  gameState.innerText="Remember the cards!"
}
function createBoard2() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('id', i)
    card.addEventListener('click',flipCard)
    gridDisplay.appendChild(card)
  }
  gameState.innerText="Click on a card!"
}
function checkIfGameIsFinished(){
   count = 0;// Reset count
  for (let i = 0; i < cardArray.length; i++) {
    let card3=document.getElementById(`${i}`)
    //console.log("2")
    //console.log(card3)
    //console.log(card3.getAttribute('src'))
    if(card3.getAttribute('src')=='images/blank.png'){
      count++
    }
  }
  if(count==0){
      gameFinished=true
      restartgame()
      //console.log(score)
      gameState.innerText="YOU WON!!!!"
      score=score+1
      //console.log(score)
      result.innerText=score
    }else{
      gameFinished=false
    }
}
createBoard1()
setTimeout(() => {
  delBoard()
  //firstBoardIsUp=false
  createBoard2()
}, "4000");
function flipCard() {
  this.removeEventListener('click',flipCard)
  //if(firstBoardIsUp==false){
    //checkIfGameIsFinished()
    if(loose==false && gameFinished==false){
      gameState.innerText="Continue!"
      let cardId = this.getAttribute('id')
      //console.log("1")
      this.setAttribute('src', `${cardArray[cardId].img}`)
      checkIfGameIsFinished()
      flipedCards.push(cardArray[cardId].name)
      //console.log(flipedCards)
      if(flipedCards.length==2){
        if(flipedCards[0]!=flipedCards[1]){
          gameState.innerText="You lost!!!!"
          if(score>0){
          score=score-1}
          result.innerText=score
          loose=true
          gameFinished=true
          flipedCards=[]
          restartgame()
        }else{
          flipedCards=[]
        }
      }
    }
  //}
  //console.log(gameFinished)
  //console.log(count)
}
}
main()



