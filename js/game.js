// game class
class Game{
    // constructor
    constructor(){
        // empty
    }

    // function getState
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    // update function
    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    // async start
    async start() {
        // if condition
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

    obstacleGroup = new Group();
    
        console.log(frameCount)
       
        }

        // play function
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                player.getPlayerAtEnd();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;

                    //  if statements
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                if(player.score>=5){
                    gameState = 2; 
                    player.rank += 1;
                    Player.updatePlayerAtEnd(player.rank);
                    player.update();
                    this.showRank();
                    
                }
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                     
                 }
                 if(frameCount % 40 === 0){
                    this.addObstacles()
                 }
                 
                  if (player.index !== null) {
                      for (var i = 0; i < fruitGroup.length; i++) {
                          if (fruitGroup.get(i).isTouching(players)) {
                              fruitGroup.get(i).destroy();
                              player.score =player.score+1;
                              player.update();
                              

                          }
                  
                          
                      }

                      if(obstacleGroup.isTouching(players)){
                        //gameState = 0;
                        //gameState = 1;
                          gameState = 2;
                       // gameState = 3;
                      }
                  }
                }

                // showing rank
                showRank() {
                    alert("Awesome !! You finished the game! You rank is :" +player.rank)
                  }

                //   gameOver
                  gameOver() {
                    textSize(40)
                    fill("white")
                    text("GAME OVER",displayWidth/2-400,displayHeight/2-200)
                    }

    // end
    end(){
       console.log("Game Ended");
       console.log(player.rank)
       this.gameOver();
    }

    // adding Obstacles
    addObstacles()
    {       
            var x, y;
            //x= 200;
            x = random(0, width-100);
            //x = random(0);
            //x = random();
            
            
            y = 0
            var obstacle = createSprite(x, y);
            obstacle.addImage("obstacle", obstacleImage);
            obstacle.velocityY = 4;
            obstacle.scale = 0.15;
            obstacleGroup.add(obstacle);
    }
}