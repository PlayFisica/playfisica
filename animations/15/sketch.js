//Declara as variáveis do carro azul
let posx_c1=10,vel_c1=0,acel_c1, massa_c1 = 4;

//Declara as variáveis do carro vermelho
let posx_c2=10,vel_c2=0,acel_c2, massa_c2 = 5;

//Declara a força que será aplicada nos carros
let forca=5;

function setup() {
  //Cria a tela
  createCanvas(1000, 400);
}

function draw() {
  //Dar cor a tela de fundo
  background(61,61,61);
  
  //Desenha as faixas vermelhas de cima
  strokeWeight (1);
  fill (255,0,0);
  rect (0,0,60,20);
  rect (120,0,60,20);
  rect (240,0,60,20);
  rect (360,0,60,20);
  rect (480,0,60,20);
  rect (600,0,60,20);
  rect (720,0,60,20);
  rect (840,0,60,20);
  rect (960,0,60,20);
  
  //Desenha as faixas vermelhas de baixo
  rect (0,380,60,20);
  rect (120,380,60,20);
  rect (240,380,60,20);
  rect (360,380,60,20);
  rect (480,380,60,20);
  rect (600,380,60,20);
  rect (720,380,60,20);
  rect (840,380,60,20);
  rect (960,380,60,20);
  
  //Desenha as faixas brancas de cima
  fill (255);
  rect (60,0,60,20);
  rect (180,0,60,20);
  rect (300,0,60,20);
  rect (420,0,60,20);
  rect (540,0,60,20);
  rect (660,0,60,20);
  rect (780,0,60,20);
  rect (900,0,60,20);
  
  //Desenha as faixas brancas de baixo
  rect (60,380,60,20);
  rect (180,380,60,20);
  rect (300,380,60,20);
  rect (420,380,60,20);
  rect (540,380,60,20);
  rect (660,380,60,20);
  rect (780,380,60,20);
  rect (900,380,60,20);
  
  //Desenha as faixas brancas do centro
  rect (20,190,100,20);
  rect (220,190,100,20);
  rect (420,190,100,20);
  rect (620,190,100,20);
  
  //Desenha os quadrados da Chegada
  square (860,50,30);
  square (890,80,30);
  square (860,110,30);
  square (890,140,30);
  square (860,170,30);
  square (890,200,30);
  square (860,230,30);
  square (890,260,30);
  square (860,290,30);
  square (890,320,30);
  
  //Desenha a linha de Chegada
  strokeWeight (20);
  stroke (255);
  line (820,50,820,350);
  
  //Desenha as manchas na pista
  stroke (61,61,61,200);
  line (200,300,400,50);
  line (700,300,600,50);
  line (800,350,900,50);
  
  //Estrutura metálica do carro azul
  strokeWeight (0);
  fill (50,50,255);
  rect (posx_c1,100,140,50,0,30,30,30);
  rect (posx_c1,60,90,40,50,30,0,0);
  
  //Estrutura metálica do carro vermelho
  fill (255,50,50);
  rect (posx_c2,290,140,50,0,30,30,30);
  rect (posx_c2,250,90,40,50,30,0,0);
  
  //Rodas cinzas do carro azul
  fill(100);
  circle (posx_c1+30,150,30);
  circle (posx_c1+110,150,30);
  
  //Rodas cinzas do carro vermelho
  circle (posx_c2+30,340,30);
  circle (posx_c2+110,340,30);
  
  //Farol cinza do carro azul
  ellipse (posx_c1+130,125,20,10);
  
  //Farol cinza do carro vermelho
  ellipse (posx_c2+130,315,20,10);
  
  //Rodas brancas do carro azul
  fill (255);
  circle (posx_c1+30,150,15);
  circle (posx_c1+110,150,15);
  
  //Rodas brancas do carro vermelho
  circle (posx_c2+30,340,15);
  circle (posx_c2+110,340,15);
  
  //Farol branco do carro azul
  circle (posx_c1+135,125,6);
  
  //Farol branco do carro vermelho
  circle (posx_c2+135,315,6);
  
  //Janelas e linha da porta do carro azul
  strokeWeight (1);
  fill (200);
  rect (posx_c1+10,70,30,30,50,0,0,0);
  square (posx_c1+50,70,30,0,50,0,0);
  strokeWeight (3);
  line (posx_c1+45,105,posx_c1+45,135);
  
  //Janelas e linha da porta do carro vermelho
  strokeWeight (1);
  rect (posx_c2+10,260,30,30,50,0,0,0);
  square (posx_c2+50,260,30,0,50,0,0);
  strokeWeight (3);
  line (posx_c2+45,295,posx_c2+45,325);
  
  //Aplicação da força no carro azul
  if (posx_c1<15){
    acel_c1 = forca/massa_c1;
  }
  vel_c1 = vel_c1 + acel_c1;
  posx_c1 = posx_c1 + vel_c1;
  
  //Aplicação da força no carro vermelho
  if (posx_c1<15){
    acel_c2 = forca/massa_c2;
  }
  vel_c2 = vel_c2 + acel_c2;
  posx_c2 = posx_c2 + vel_c2;
  
  //Aplicação da Parada do carro azul
  if (posx_c1>800){
    acel_c1 = 0;
    vel_c1 = 0;
  }
  
  //Aplicação da Parada do carro azul
  if (posx_c2>800){
    acel_c2 = 0;
    vel_c2 = 0;
    posx_c2 = 850;
  }
}