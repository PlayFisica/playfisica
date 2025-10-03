function setup() {
  //Cria a tela
  createCanvas(600,700);
}

function draw() {
  //Dar cor ao fundo
  background (255);
  
  //Define que as formas não terão contornos
  noStroke();
  
  //Desenha a Pizza
  fill(200,130,0);
  arc (300,200,350,350,HALF_PI,TWO_PI);
  fill(220,220,0);
  arc (300,200,300,300,HALF_PI,TWO_PI);
  
  //Desenha o pedaço cortado
  fill(200,130,0);
  arc (330,230,350,350,0,HALF_PI);
  fill(220,220,0);
  arc (330,230,300,300,0,HALF_PI);
  
  //Desenha as calabresas
  fill(170,0,0);
  circle (265,290,35);
  circle (210,230,35);
  circle (210,150,35);
  circle (265,100,35);
  circle (350,100,35);
  circle (400,150,35);
  circle (360,260,35);
  circle (400,330,35);
  
  //Desenha os temperos verdes grossos
  fill(0,170,0)
  rect (200,175,30,10);
  rect (400,185,30,10);
  rect (300,80,10,30);
  rect (300,150,10,30);
  rect (285,250,10,30);
  rect (430,250,30,10);
  rect (360,320,10,30);
  
  //Desenha os temperos verdes finos
  strokeWeight (4);
  stroke(0,80,0);
  line(200,300,220,280);
  line(200,100,220,115);
  line (425,280,450,300)
  
  //Desenha os temperos vermelhos
  stroke (100,0,0);
  strokeWeight(8);
  point(400,300);
  point (400,250);
  point (260,220);
  point (180,190);
  point (260,150);
  point (360,150);
  point (300,70);
  point (280,330);
}