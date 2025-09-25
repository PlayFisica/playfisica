//Declara a Posicão e a velocidade do boneco
let posx_b=880,posy_b=230,velx_b=5,vely_b=0;

//Declara a posicão e a velocidade do carro
let posx_c=750,velx_c=5;

//Declara a gravidade
let gravidade=0.03;

function setup() {
  //Cria a tela
  createCanvas(1000, 400);
}

function draw() {
  //Dar cor ao plano de fundo da tela
  background(126, 213, 242);
  
  //Sol
  strokeWeight (1);
  fill(255,255,0);
  circle (100,100,100);
  
  //Montanhas
  fill (48, 217, 79);
  ellipse (150,300,300,400);
  ellipse (350,300,300,250);
  fill (48, 217, 79);
  ellipse (850,320,400,200);
  fill (87, 242, 116);
  ellipse (550,300,400,300);
  
  //Rodovia
  fill (50);
  rect (0,300,1000,100);
  
  //Sinalização da Rodovia
  fill (255);
  rect (20,340,50,10);
  rect (100,340,50,10);
  rect (180,340,50,10);
  rect (260,340,50,10);
  rect (340,340,50,10);
  rect (420,340,50,10);
  rect (500,340,50,10);
  rect (580,340,50,10);
  rect (660,340,50,10);
  rect (740,340,50,10);
  rect (820,340,50,10);
  rect (900,340,50,10);
  rect (980,340,50,10);
  
  //Corpo do boneco
  strokeWeight (4);
  line (posx_b,posy_b,posx_b+50,posy_b);
  line (posx_b+50,posy_b,posx_b+80,posy_b-10);
  line (posx_b+50,posy_b,posx_b+80,posy_b+10);
  line (posx_b+20,posy_b,posx_b+40,posy_b-20);
  line (posx_b+20,posy_b,posx_b+40,posy_b+20);
  
  //Estrutura metálica do carro
  strokeWeight (0);
  fill (255,50,50);
  rect (posx_c,250,230,70,30,0,30,30);
  rect (posx_c+80,190,150,60,50,30,0,0);
  
  //Rodas cinzas do carro
  fill(100);
  circle (posx_c+60,320,60);
  circle (posx_c+180,320,60);
  
  //Farol cinza do carro;
  ellipse (posx_c+15,285,30,20);
  
  //Rodas brancas do carro
  fill (255);
  circle (posx_c+60,320,30);
  circle (posx_c+180,320,30);
  
  //Farol branco do carro
  circle (posx_c+10,285,15);
  
  //Janelas e linha da porta do carro
  strokeWeight (1);
  fill (200);
  rect (posx_c+90,200,50,50,50,0,0,0);
  square (posx_c+170,200,50,0,50,0,0);
  line (posx_c+155,250,posx_c+155,290);
  
  //Obstáculo na rodovia
  fill (255,200,0);
  quad (300,290,340,290,360,370,300,370);
  fill (0);
  quad (300,320,346,320,350,330,300,330);
  
  //Cabeça do Boneco
  strokeWeight (4);
  fill (2550);
  circle (posx_b-15,posy_b,30);
  
  //Movimento do carro e do boneco no eixo x
  posx_b = posx_b - velx_b;
  if (posx_c>343){
    posx_c = posx_c - velx_c;
  }
  else{
     //Movimento do boneco no eixo y
    vely_b = vely_b + gravidade;
    posy_b = posy_b + vely_b;
    if (posy_b>330){
      gravidade = 0;
      vely_b = 0;
      velx_b = 0;
    }
  }
}