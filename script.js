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


      function initiateGame(){
        const scoreBoard=document.createElement('div')
        scoreBoard.id='score-board'

        document.body.insertBefore(scoreBoard,gamearena) // insert score before the arena game 

        const startButton=document.createElement('button')

        startButton.textContent='Start Game';
        startButton.classList.add('start-button');

        document.body.append(startButton)

    
      }
      initiateGame()


})