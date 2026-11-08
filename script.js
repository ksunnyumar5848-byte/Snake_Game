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

    let snake=[{x:160,y:200},{x:140,y:200},{x:120,y:200}] // this is you starting snake size in the grid  {head body tail }


    let dx=cellSize; // 
    let dy=0;

    let intervalId;
    let gameSpeed=200;
     

    function moveFood(){

        let newx, newy;

        do{
            newx=Math.floor(Math.random()*30)*cellSize;
            newy=Math.floor(Math.random()*30)*cellSize;

        }while(snake.some(snakecell => snakecell.x==newx && snakecell.y ==newy));

        food={x:newx ,y:newy};
    }


    function updateSnake(){
       const newHead={x:snake[0].x +dx , y:snake[0].y +dy} 
       
       snake.unshift(newHead);

       if(newHead.x==food.x && newHead.y == food.y){
        score+=10;  // add in the head score 

        // todo move food 
        moveFood()

        if(gameSpeed > 50){
            
            clearInterval(intervalId);
            gameSpeed-=10;
            gameLoop();
        }

       }else{
        snake.pop() // remove sanke tail 
       }

    }
    function drawScoreBoard(){
            const scoreBoard=document.getElementById('score-board');

            scoreBoard.textContent=`Score : ${score}`;
    }

    function changeDirection(e){
     
        console.log("key are the press ",e)

        
        const isGoingDown =  dy===cellSize
        const isGoingUp   =   dy===-cellSize
        const isGoingRight = dy===cellSize;
        const isGoingLeft =  dy===-cellSize;





        if(e.key==="ArrowUp"  && !isGoingDown){
            dx=0;
            dy=-cellSize;

        }else if(e.key==="ArrowDown" && !isGoingUp){
           dx=0;
           dy=cellSize  
        }
        else if(e.key==="ArrowLeft" &&  !isGoingRight){
           dx=-cellSize;
           dy=0
        }
        else if(e.key==="ArrowRight" && !isGoingLeft){
           dx=cellSize;
           dy=0;
        }


    }


    function drawDiv(x,y,className){
        const divElement=document.createElement('div');
        divElement.classList.add(className)
        divElement.style.top=`${y}px`;
        divElement.style.left=`${x}px `;
        return divElement;
    }

    function drawFoodAndSnake(){
        gamearena.innerHTML= '';

        snake.forEach((snakecell)=>{
            const snakeElement=drawDiv(snakecell.x,snakecell.y,'snake')
            gamearena.append(snakeElement)
        })

        const foodElement= drawDiv(food.x , food.y, 'food');
        gamearena.appendChild(foodElement)
    }

    function isGameOver(){

       // snake collision are it self 

        for(let i = 1; i < snake.length; i++) {
            if(snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
                return true;
            }
        }



        // wall collision cheak 

        const hitLeftWall = snake[0].x<0; // snake[0] -> head
        const hitRightWall=snake[0].x >arenaSize-cellSize;
        const hitTopWall=snake[0].y < 0;
        const hitBottomWall=snake[0].y > arenaSize-cellSize;

        return hitLeftWall || hitRightWall || hitBottomWall || hitTopWall;



    }

    function gameLoop(){
      intervalId =  setInterval(()=>{
          if(isGameOver()){
            clearInterval(intervalId);
            gameStarted=false;
            alert('game-over')
            return
          }
          updateSnake();
          drawFoodAndSnake()
          drawScoreBoard();
          
        },gameSpeed)
    }

    function runGame(){

        if(!gameStarted){
            gameStarted=true;
           
            document.addEventListener('keydown',changeDirection);


            gameLoop()

           
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