document.addEventListener('DOMContentLoaded',function(){
   const gamearena= document.getElementById('game-arena')

      const arenaSize=600;

      const cellSize=20;

      let score=0;  // score of the game 

      let gameStarted=false;  // game Status

      let food={   // cell cordinate are covert into the pixel 
        x:300,
        y:200
      }

    let snake=[{x:160,y:200},{x:140,y:200},{x:120,y:200}] // this is you starting snake size in the grid 


    function drawDiv(x,y,className){
        const divElement=document.createElement('div');
        divElement.classList.add(className)
        divElement.style.top=`${y} px`;
        divElement.style.left=`${x} px `;
        return divElement;
    }

    function drawFoodAndSnake(){
        gamearena.innerHTML= '';

        const foodElement= drawDiv(food.x , food.y, 'food');
        gamearena.appendChild(foodElement)
    }


    function runGame(){

        if(!gameStarted){
            gameStarted=true;

            // gameLoop todo 
        }
        
    }


      function initiateGame(){
        const scoreBoard=document.createElement('div')
        scoreBoard.id='score-board'

        document.body.insertBefore(scoreBoard,gamearena) // insert score before the arena game 

        const startButton=document.createElement('button')

        startButton.textContent='Start Game';
        startButton.classList.add('start-button');

        document.body.append(startButton)

        startButton.addEventListener('click',function startGame(){
            startButton.style.display='none';

            runGame()
        })

    
      }
      initiateGame()


})