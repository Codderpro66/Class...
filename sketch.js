function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

enemy1 = new Enemy(200,240,70,70);
enemy2 = new Enemy(300,300,70,70);
enemy3 = new Enemy(350,260,70,70);
enemy4 = new Enemy(280,300,70,70);
enemy5 = new Enemy(400,360,70,70);
enemy6 = new Enemy(310,400,70,70);
ground1 = new Ground(800,310,70,70);
launcher1 = new Launcher(250,240,70,70);
extra1 = new Extra(50,240,100,70);
strike1 = new Strike(100,280,20,20);
enemy1.display();
enemy2.display();
enemy3.display();
enemy4.display();
enemy5.display();
enemy6.display();
ground1.display();
launcher1.display();
extra1.display();
strike1.display();

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(bird.body);
  }
}