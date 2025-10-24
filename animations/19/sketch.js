//Declara as variáveis das posições e das velocidades do círculo
let posx=100,posy=100,velx=20, vely=20;

//Declara a gravidade e o coeficiente de restituição
let gravidade=1, e=0.9;

function setup() {
  //Cria a tela
  createCanvas(800, 400);
}

function draw() {
  //Dar cor ao plano de fundo
  background(249, 249, 113);
  
  //Desenha o círculo
  fill (255, 199, 79);
  circle (posx,posy,50);
  
  //Desenha o chão
  fill (125, 83, 4);
  rect (0,350,800,50);
  
  //Aplica o movimento horizontal
  posx = posx + velx;
  
  //Aplica o movimento vertical
  vely = vely + gravidade;
  posy = posy + vely;
  
  //Aplica a colisão no eixo x
  if (posx>775){
    posx = 775;
    velx = -e * velx;
  }
  if (posx<25){
    posx = 25;
    velx = -e * velx;
  }
  
  //Aplica a colisão no eixo y
  if (posy>325){
      posy = 325;
      vely = -e * vely;
  }
  if (posy<25){
    posy = 25;
    vely = -e * vely;
  }
}