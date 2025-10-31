let canvasWidth = 800;
let canvasHeight = 700;
let scaleFactor;

function setup() {
  //Calcula a escala máxima que cabe na tela mantendo a proporção
  scaleFactor = min(windowWidth / canvasWidth, windowHeight / canvasHeight);
  
  createCanvas(canvasWidth * scaleFactor, canvasHeight * scaleFactor);
  noStroke();
}

function draw() {
  background(0,200,255);
  
  push();
  scale(scaleFactor); // Escala todos os elementos proporcionalmente

  //Sol
  fill(255,255,0);
  circle(100,160,115);

  //Pássaros
  stroke(0);
  line(100,50,120,70);
  line(120,70,135,50);
  line(200,155,220,180);
  line(220,180,240,155);
  line(400,280,420,300);
  line(420,300,440,280);
  line(500,330,520,350);
  line(520,350,540,330);
  line(650,200,670,220);
  line(670,220,690,200);

  noStroke();
  //Praia
  fill(255,150,0,220);
  quad(0,550,0,700,400,700,400,550);
  //Mar
  fill(0,50,255);
  quad(400,550,400,700,800,700,800,550);

  //Tronco
  fill(150,80,0);
  quad(100,425,100,550,150,550,150,425);
  //Folhas
  fill(0,150,0,200);
  circle(70,420,70);
  circle(125,420,70);
  circle(175,420,70);
  circle(100,375,70);
  circle(150,375,70);

  //Foguete (posições originais)
  fill(255,0,0);
  rect(270,y_r,50,150);
  fill(0,0,255);
  triangle(270,y_t1_1,220,y_t1_2,270,y_t1_3);
  triangle(320,y_t2_1,320,y_t2_2,370,y_t2_3);
  triangle(295,y_t3_1,255,y_t3_2,335,y_t3_3);

  fill(100,150); // fumaça
  circle(265,y_c1,50);
  circle(295,y_c2,50);
  circle(325,y_c3,50);

  pop(); // volta escala normal
}

//Pouso do foguete e MRUV continuam iguais
