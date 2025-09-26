//Declara as variáveis da corda do arco e da linha da flecha
let x_l=20, x1_flecha=20, x2_flecha=110, y1_flecha=200, y2_flecha=200;

//Declara as variáveis dos pontos do triângulo da flecha
let x1_t = 120, x2_t = 100, x3_t = 100, y1_t = 200, y2_t = 190, y3_t = 210;

//Declara a velocidade e a gravidade
let velx=3.1,vely=0,gravidade=0.011;

function setup() {
  //Criar a tela
  createCanvas(800, 600);
}

function draw() {
  //Dar cor a tela
  background(143, 223, 235);
  
  //Desenha o chão
  fill (110, 68, 2);
  strokeWeight(0);
  rect (0,480,800,150);
  
  //Desenha a grama
  fill (0,200,0);
  rect (0,480,800,20);
  
  //Desenha a montanha
  fill (156, 99, 8);
  rect (0,250,130,230,0,100,0,0);
  
  //Desenha o suporte para o alvo
  strokeWeight (4);
  line (650,480,670,440);
  line (700,480,700,440);
  line (730,440,750,480);
  
  //Desenha o alvo
  strokeWeight(1);
  fill (255,0,0);
  circle (700,400,100);
  fill (255,255,255);
  circle (700,400,80);
  fill (255,0,0);
  circle (700,400,60);
  fill (255,255,255);
  circle (700,400,40);
  
  //Desenha o arco
  noFill();
  strokeWeight(2);
  arc (70,200,50,80,PI+HALF_PI,HALF_PI);
  line (x_l,200,70,160);
  line (x_l,200,70,240);
  
  //Desenha a flecha
  fill (0);
  line (x1_flecha,y1_flecha,x2_flecha,y2_flecha);
  triangle (x1_t,y1_t,x2_t,y2_t,x2_t,y3_t);
  
  //Aplica o MRU na corda do arco
  x_l = x_l + velx;
  if (x_l>70){
    x_l = 70;
  }
  
  //Aplica o Lançamento Horizontal na flecha
  x1_flecha = x1_flecha + velx;
  x2_flecha = x2_flecha + velx;
  x1_t = x1_t + velx;
  x2_t = x2_t + velx;
  x3_t = x3_t + velx;
  
  vely = vely + gravidade;
  y1_flecha = y1_flecha + vely;
  y2_flecha = y2_flecha + vely;
  y1_t = y1_t + vely;
  y2_t = y2_t + vely;
  y3_t = y3_t + vely;
  
  if (x3_t>680){
    velx=0;
    vely=0;
    gravidade=0;
  }
}