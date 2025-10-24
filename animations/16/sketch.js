//Declara e define a gravidade
let gravidade=0.2;

//Declara a Força de Arrasto e o coeficiente de arrasto
let Forca_de_Arrasto=0,coef_Arrasto=0.5;

//Declara as variáveis da caixa em queda livre
let Peso1=0,massa1=5, acel1, vely1=0, posy1=70;

//Declara as variáveis da caixa com paraquedas
let Peso2=0,massa2=5, acel2, vely2=0, posy2=70;

function setup() {
  //Cria a tela
  createCanvas(800, 600);
}

function draw() {
  //Dar cor ao plano de fundo
  background(220);
  
  //Define que as formas não terão contornos
  strokeWeight (0);
  
  //Desenha o fundo vermelho
  fill (244, 68, 45);
  rect (0,0,800,250);
  
  //Desenha as nuvens azuis escuras
  fill (165,167,218);
  ellipse (120,250,160,80);
  ellipse (500,250,160,250);
  
  //Desenha as nuvens brancas
  fill (249,254,255);
  ellipse (50,250,160,190);
  ellipse (420,250,160,190);
  ellipse (320,250,120,80);
  ellipse (730,250,160,190);
  
  //Desenha as nuvens azuis claros
  fill(200,217,243);
  ellipse (0,250,120,140);
  ellipse (800,250,150,140);
  
  //Desenha o fundo azul
  fill (104,130,243);
  rect (0,250,800,350);
  
  //Desenha os triângulos cinzas
  fill (126,142,168);
  triangle (0,350,0,600,350,600);
  triangle (320,450,340,530,395,400);
  
  //Desenha os triângulos verdes-azuis escuros
  fill (58,115,124);
  triangle (500,180,300,600,500,600);
  fill (43,101,113);
  triangle (500,180,560,285,500,385);
  
  //Desenha os triângulos verdes claros
  fill (83,142,84);
  triangle (235,200,100,600,235,600);
  triangle (620,170,380,600,620,600);
  triangle (800,370,755,450,800,540);
  
  //Desenha os triângulos verdes escuros
  fill (51,108,63);
  triangle (235,200,370,600,235,600);
  triangle (620,170,830,600,620,600);
  
  //Desenha o triângulo vermelho
  fill (125,51,50);
  triangle (0,500,0,600,60,600);
  
  //Desenha a parte da frente das caixas
  fill (208,143,77);
  square (150,posy1,50);
  square (550,posy2,50);
  
  //Desenha a parte do lado das caixas
  fill (173,113,59);
  quad (135,posy1-10,150,posy1,150,posy1+50,135,posy1+40);
  quad (535,posy2-10,550,posy2,550,posy2+50,535,posy2+40);
  
  //Desenha a parte de cima das caixas
  fill (183,133,74);
  quad (135,posy1-10,185,posy1-10,200,posy1,150,posy1);
  quad (535,posy2-10,585,posy2-10,600,posy2,550,posy2);
  
  //Desenha o paraquedas
  fill (1,202,150);
  ellipse (570, posy2-90,170,100);
  strokeWeight (2);
  line (488,posy2-80,535,posy2+20);
  line (653,posy2-80,602,posy2+20);
  
  //Aplica a queda livre
  Peso1 = massa1 * gravidade;
  acel1 = Peso1/massa1;
  vely1 = vely1 + acel1;
  posy1 = posy1 + vely1;
  if (posy1>550){
    vely1 = 0;
    posy1 = 550;
  }
  
  //Aplica a resistência do ar
  Forca_de_Arrasto = coef_Arrasto * vely2;
  Peso2 = massa2 * gravidade;
  acel2 = (Peso2-Forca_de_Arrasto)/massa2;
  vely2 = vely2 + acel2;
  posy2 = posy2 + vely2;
  if (posy2>550){
    vely2=0;
    posy2=550;
  }
}