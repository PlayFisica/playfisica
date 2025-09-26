let posicaoy = -15, velocidadey=0, gravidade=0.01;
let posicaoy2 = -600,posicaoy3=-1100;

function setup() {
  //Cria a tela
  createCanvas(800, 600);
}

function draw() {
  //Dar cor ao plano de fundo
  background (109, 227, 247);
  
  //Desenha o Chão verde
  fill (0,200,0);
  rect (0,400,800,200);
  
  //Desenha o tronco da Árvore
  fill (161, 99, 6);
  rect (100,320,50,160);
  
  //Desenha as folhas da árvore
  fill (0,150,0);
  circle (125,300,125);
  
  //Desenha o sol
  fill (255,220,0);
  circle (100,100,100);
  
  //Desenha a casa
  fill (152, 163, 245);
  square (250,300,100);
  fill (245, 197, 125);
  triangle (300,250,240,300,360,300);
  fill (220);
  square (255,305,25);
  
  //Desenha as Montanhas
  fill (150);
  triangle (650,225,550,400,750,400);
  triangle (550,100,450,400,650,400);
  
  //Desenha a lua
  noStroke ();
  fill (255,100);
  circle (650,100,100);
  
  //Desenha a primeira fileira de neve
  fill (255);
  circle (15,posicaoy,30);
  circle (70,posicaoy,30);
  circle (100,posicaoy,30);
  circle (130,posicaoy,30);
  circle (175,posicaoy,30);
  circle (210,posicaoy,30);
  circle (250,posicaoy,30);
  circle (300,posicaoy,30);
  circle (310,posicaoy,30);
  circle (340,posicaoy,30);
  circle (400,posicaoy,30);
  circle (450,posicaoy,30);
  circle (480,posicaoy,30);
  circle (530,posicaoy,30);
  circle (590,posicaoy,30);
  circle (630,posicaoy,30);
  circle (650,posicaoy,30);
  circle (700,posicaoy,30);
  circle (780,posicaoy,30);
  circle (800,posicaoy,30);
  
  //Desenha a segunda fileira de neve
  circle (35,posicaoy2,30);
  circle (95,posicaoy2,30);
  circle (120,posicaoy2,30);
  circle (150,posicaoy2,30);
  circle (195,posicaoy2,30);
  circle (230,posicaoy2,30);
  circle (270,posicaoy2,30);
  circle (330,posicaoy2,30);
  circle (340,posicaoy2,30);
  circle (390,posicaoy2,30);
  circle (430,posicaoy2,30);
  circle (480,posicaoy2,30);
  circle (510,posicaoy2,30);
  circle (570,posicaoy2,30);
  circle (620,posicaoy2,30);
  circle (650,posicaoy2,30);
  circle (680,posicaoy2,30);
  circle (730,posicaoy2,30);
  circle (780,posicaoy2,30);
  circle (800,posicaoy2,30);
  
  //Desenha a terceira fileira de neve
  circle (55,posicaoy3,30);
  circle (105,posicaoy3,30);
  circle (140,posicaoy3,30);
  circle (170,posicaoy3,30);
  circle (215,posicaoy3,30);
  circle (250,posicaoy3,30);
  circle (290,posicaoy3,30);
  circle (350,posicaoy3,30);
  circle (370,posicaoy3,30);
  circle (420,posicaoy3,30);
  circle (450,posicaoy3,30);
  circle (530,posicaoy3,30);
  circle (550,posicaoy3,30);
  circle (600,posicaoy3,30);
  circle (640,posicaoy3,30);
  circle (670,posicaoy3,30);
  circle (710,posicaoy3,30);
  circle (750,posicaoy3,30);
  circle (800,posicaoy3,30);
  circle (780,posicaoy3,30);
  
  //Aplica a Queda livre na primeira fileira
  velocidadey = velocidadey + gravidade;
  posicaoy = posicaoy + velocidadey;
  if (posicaoy>585){
    posicaoy = 585;
  }
  
  //Aplica a Queda livre na segunda fileira
  posicaoy2 = posicaoy2 + velocidadey;
  if (posicaoy2>585){
    posicaoy2 = 585;
  }
  
  //Aplica a Queda livre na terceira fileira
  posicaoy3 = posicaoy3 + velocidadey;
  if (posicaoy3>585){
    posicaoy3 = 585;
  }
}
