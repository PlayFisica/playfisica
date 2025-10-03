function setup() {
  //Cria a tela
  createCanvas (600,700);
}

function draw() {
  //Define a espessura dos contornos
  strokeWeight(5);
  
  // Desenha os dois retangulos do fundo
  fill (255,150,0);
  rect (0,0,600,200);
  fill (255,150,120,200);
  rect (0,200,600,500);
  
  //Desenha as orelhas do Gato
  fill (200);
  triangle (190,40,210,150,250,100);
  triangle (400,40,390,150,320,120);
  
  //Desenha o corpo, a cabeça e a coleira
  ellipse(300,300,270,370);
  fill(90,90,255);
  circle (300,180,200);
  fill (200);
  circle (300,160,200);
  fill (255,150,0);
  circle (300,300,40);
  
  //Desenha o focinho
  fill (240);
  quad(280,180,290,200,310,200,320,180);
  
  //Desenha as linhas do focinho 
  line(290,200,270,220);
  line(310,200,330,220);
 
  //Desenha os pontos do focinho
  point (275,190);
  point (280,200);
  point (270,205);
  point (325,190);
  point (320,200);
  point (327,205);
  
  // Desenha os olhos
  ellipse (272,152,30,60);
  ellipse (322,152,30,60);
  
  //Desenha as linhas acima dos olhos
  line (255,137,280,110);
  line (340,137,316,110);
  
  //Desenha a pupila do gato
  fill(90,90,255);
  circle (272,165,13);
  circle (322,165,13);
  
  //Desenha os pelos do focinho
  strokeWeight(3);
  line (170,160,265,187);
  line (160,190,272,197);
  line (170,220,263,206);
  line (332,188,425,160);
  line (327,199,432,190);
  line (333,206,423,220);
}