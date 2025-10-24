//Declara a massa, posição inicial, o ponto de equilíbrio da mola, a velocidade inicial e a aceleração
let massa=500, pos=100, repouso = 200, vel=0, acel=0;

//Declara a Força Elástica, a constante elástica e a deformação
let Fel=0, k=2,x=0;

function setup() {
  //Cria a tela
  createCanvas(800, 400);
}

function draw() {
  //Dar cor ao plano de fundo
  background(255);
  
  //Desenha o chão
  fill (156, 95, 3);
  rect (0,330,800,70);
  
  //Desenha o suporte da mola
  fill (0);
  rect (0,270,20,60);
  
  //Aplica a Força elástica
  x = pos - repouso;
  Fel = -k * x;
  acel = Fel / massa;
  vel += acel;
  pos += vel;
  
  //Desenha a Mola
  line (20,300,pos,300);
  
  //Desenha o quadrado
  fill (195, 224, 4)
  square (pos,270,60);
}