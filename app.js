
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
    let blankCardsArr=[]
    let firstBoardIsUp=true
    let count=0
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const gridDisplay = document.querySelector('#grid')

    function delBoard(){
      for (let i = 0; i < cardArray.length; i++) {
        let card2=document.querySelector(`[data-id="${i}"]`)
        card2.remove()
      }
    }

    function createBoard1() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', `${cardArray[i].img}`)
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
      }
    }

    function createBoard2() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
      }
    }

    function checkIfGameIsFinished(){
       count = 0;// Reset count
      for (let i = 0; i < cardArray.length; i++) {
        let card3=document.querySelector(`[data-id="${i}"]`)
        console.log(card3)
        console.log(card3.getAttribute('src'))
        if(card3.getAttribute('src')=='images/blank.png'){
          count++
        }
        if(count==0){
          gameFinished=true
        }else{
          gameFinished=false
        }
      }
    }


    createBoard1()

    setTimeout(() => {
      delBoard()
      firstBoardIsUp=false
      createBoard2()
    }, "5000");

    
    

    function flipCard() {
      if(firstBoardIsUp==false){
        checkIfGameIsFinished()
        if(loose==false /*gameFinished==false*/){
          let cardId = this.getAttribute('data-id')
          this.setAttribute('src', `${cardArray[cardId].img}`)
          flipedCards.push(cardArray[cardId].name)
          console.log(flipedCards)
          if(flipedCards.length==2){
            if(flipedCards[0]!=flipedCards[1]){
              console.log('you lost')
              loose=true
              gameFinished=true
              flipedCards=[]
            }else{
              flipedCards=[]
            }
          }
        }
      }
      console.log(gameFinished)
      console.log(count)
    }
    