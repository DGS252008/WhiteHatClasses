const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

function setup(){
    createCanvas(1000, 800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, 780, width, 20);

    box1 = new Box(800, 720, 70, 70);
    box2 = new Box(800, 640, 70, 70);
    box3 = new Box(800, 560, 70, 70);
    box4 = new Box(800, 480, 70, 70);
    box5 = new Box(800, 400, 70, 70);

    box6 = new Box(880, 720, 70, 70);
    box7 = new Box(880, 640, 70, 70);
    box8 = new Box(880, 560, 70, 70);
    box9 = new Box(880, 480, 70, 70);
    box10 = new Box(880, 400, 70, 70);

    ball = new Ball(width/2, 500, 100);

    rope = new Rope(ball.body, {x:width/2, y:150});
}

function draw(){
    background(10, 50, 35);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    ball.display();
    rope.display();

    ground.display();
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}