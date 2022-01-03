let ball;

let table;
let base;

let gameState;

let obstacles = [];

let timer = 0;

const PLAY = 1;
const END = 0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let score = 0;



function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(200, 200, 50);

  table = new Table(200, 320, 270, 30, 0);
  base = new Table(200, 380, 20, 105, 1);

  gameState = PLAY;
}


function draw() {

  background(51);
  Engine.update(engine);

  if (gameState == PLAY) {

    timer += 1;

    ball.display();

    if (keyIsDown(LEFT_ARROW)) {
      ball.left();
    }

    if (keyIsDown(RIGHT_ARROW)) {
      ball.right();
    }

    for(var i = 0; i < obstacles.length; i++){
      var object = obstacles[i];
      object.display();

      if(1 == 0){

        console.log("65");

        World.remove(world, object);
        obstacles.splice(i, 1);
      }
    }

    spawnObstacles();

    table.show();
  } else {
    swal(
      {
        title: `Game Over!!!`,
        text: "Thanks for playing, your score was: " + score + "!!",
        confirmButtonText: "Play Again"
      },
      function(isConfirm) {
        if (isConfirm) {
          location.reload();
        }
      }
    );
  }
}

function spawnObstacles(){

  if(timer%10 == 0){
    ran = Math.round(random(20, 3800));

    var obstacle = new Obstacle(ran, 10, 60);

    obstacles.push(obstacle);

    score +=1;
  }
}
