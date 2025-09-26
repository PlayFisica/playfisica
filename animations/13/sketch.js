//Declara as variáveis do canhão, da velocidade e gravidade
let x_canhao=77, velx=19, y_canhao=467, vely=18, gravidade=1;

function setup() {
  //Cria a tela
  createCanvas(800, 600);
}

function draw() {
  //Dar cor ao plano de fundo
  background(143, 223, 235);
  
  //Desenha um sol
  fill (250, 242, 22);
  circle (100,100,100);
  
  //Desenha um cacto
  fill (76, 179, 62);
  strokeWeight(0);
  rect (325,355,40,200,50);
  rect (275,380,30,100,50);
  rect (275,450,90,30,50);
  rect (390,400,30,100,50);
  rect (345,470,65,30,50);
  
  //Desenha o chão
  fill (247, 243, 131)
  rect (0,535,800,100);
  
  //Desenha a bola de canhão
  fill (20);
  circle (x_canhao,y_canhao,20);
  
  //Desenha o canhão
  fill (150);
  quad (50,475,70,490,95,465,80,450);
  fill (50);
  circle (50,495,50);
  circle (40,520,30);
  fill (255);
  circle (40,520,15);
  
  //Aplica o Lançamento Oblíquo
  x_canhao = x_canhao + velx;
  
  vely = vely - gravidade;
  y_canhao = y_canhao - vely;
  if (y_canhao>523){
    y_canhao = 523;
    x_canhao = 790;
  }
}