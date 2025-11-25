//Declara a variável que controla o pulo
let pulo = false;

//Declara as variáveis da posição y, da velocidade y e da gravidade
let posy=500, vely=30, gravidade=1;

function setup() {
  //Cria a tela
  createCanvas(800, 600);
}

function draw() {
  //Dar cor ao plano de fundo
  background(220,50);
  
  //Dar movimento ao círculo caso pulo seja verdadeiro
  if (pulo === true){
    vely = vely - gravidade;
    posy = posy - vely;
    if (posy>450){
      posy = 450;
    }
  }
  
  //Desenha o círculo e dar cor a ele
  fill (255,0,0);
  circle (400,posy,100);
}

function mousePressed (){
  //Mouse pressionado, pulo se torna verdadeiro
  pulo = true;
}

function mouseReleased(){
  //Mouse liberado, pulo se torna falso e o círculo para
  pulo = false;
  
  //Aplica a mesma velocidade inicial
  vely = 30;
}