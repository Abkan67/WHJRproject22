var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var moving = false;
function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 650);



	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale = 0.15;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	


}


function draw() {
	Engine.run(engine);
  background(bgImg);
	if(moving){Matter.Body.setPosition(starBody,{x:650,y:starBody.position.y+1})}
	star.y=starBody.position.y;
	if(starBody.position.y>500&&starBody.position.y<650&&650>fairy.x+50&&650<fairy.x+300){moving=false;}
  drawSprites();

}

function keyPressed() {	fairyVoice.play();
	if (key=="a"||key=="ArrowLeft") {fairy.velocityX-=1;}
	if (key=="d"||key=="ArrowRight"){fairy.velocityX+=1;}
	if (key=="s"||key=="ArrowDown"){moving=true;}
}
