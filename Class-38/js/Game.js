class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }

    car1 = createSprite(100, 200);
    car2 = createSprite(300, 200);
    car3 = createSprite(500, 200);
    car4 = createSprite(700, 200);

    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100);
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_pos = 130;
      for(var plr in allPlayers){
        index++;
        x+=200;
        y = displayHeight - allPlayers[plr].distance;

        cars[index-1].x = x;
        cars[index-1].y = y;

        if(plr === "player" + player.index){
          cars[index-1].shapeColor = ("red");
          camera.position.x = displayWidth/2;
          camera.position.x = cars[index-1].y;
        }
        else{
          cars[index-1].shapeColor = ("black");
        }

        textSize(15);
        display_pos+=20;
        text(allPlayers[plr].name  + ":" + allPlayers[plr].distance, 120, display_pos);
      }
      
    }

    if(keyDown(UP_ARROW) &&
       player.index !== null){
        player.distance+=50;
        player.update();
    }
  }

}
