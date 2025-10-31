//Declara as variáveis do boneco
let posx_b = 880, posy_b = 230, velx_b = 5, vely_b = 0;

//Declara as variáveis do carro
let posx_c = 750, velx_c = 5;

//Gravidade
let gravidade = 0.03;

//Dimensões base
const baseWidth = 1000;
const baseHeight = 400;
let escala;
let canvasElem;

function setup() {
  //Calcula escala mantendo proporção
  escala = min(windowWidth / baseWidth, windowHeight / baseHeight);

  //Cria canvas com tamanho proporcional
  const cw = floor(baseWidth * escala);
  const ch = floor(baseHeight * escala);
  canvasElem = createCanvas(cw, ch);

  //Centraliza canvas
  canvasElem.position(floor((windowWidth - width) / 2), floor((windowHeight - height) / 2));
  canvasElem.style('display', 'block');
}

function draw() {
  //Fundo
  background(126, 213, 242);

  //Escala os desenhos
  push();
  scale(escala);

  //Sol
  strokeWeight(1);
  fill(255, 255, 0);
  circle(100, 100, 100);

  //Montanhas
  fill(48, 217, 79);
  ellipse(150, 300, 300, 400);
  ellipse(350, 300, 300, 250);
  fill(48, 217, 79);
  ellipse(850, 320, 400, 200);
  fill(87, 242, 116);
  ellipse(550, 300, 400, 300);

  //Rodovia
  fill(50);
  rect(0, 300, 1000, 100);

  //Sinalização
  fill(255);
  for (let i = 20; i <= 980; i += 80) {
    rect(i, 340, 50, 10);
  }

  //Corpo do boneco
  strokeWeight(4);
  line(posx_b, posy_b, posx_b + 50, posy_b);
  line(posx_b + 50, posy_b, posx_b + 80, posy_b - 10);
  line(posx_b + 50, posy_b, posx_b + 80, posy_b + 10);
  line(posx_b + 20, posy_b, posx_b + 40, posy_b - 20);
  line(posx_b + 20, posy_b, posx_b + 40, posy_b + 20);

  //Carro
  strokeWeight(0);
  fill(255, 50, 50);
  rect(posx_c, 250, 230, 70, 30, 0, 30, 30);
  rect(posx_c + 80, 190, 150, 60, 50, 30, 0, 0);

  //Rodas
  fill(100);
  circle(posx_c + 60, 320, 60);
  circle(posx_c + 180, 320, 60);
  fill(255);
  circle(posx_c + 60, 320, 30);
  circle(posx_c + 180, 320, 30);

  //Faróis
  fill(100);
  ellipse(posx_c + 15, 285, 30, 20);
  fill(255);
  circle(posx_c + 10, 285, 15);

  //Janelas
  strokeWeight(1);
  fill(200);
  rect(posx_c + 90, 200, 50, 50, 50, 0, 0, 0);
  square(posx_c + 170, 200, 50, 0, 50, 0, 0);
  line(posx_c + 155, 250, posx_c + 155, 290);

  //Obstáculo
  fill(255, 200, 0);
  quad(300, 290, 340, 290, 360, 370, 300, 370);
  fill(0);
  quad(300, 320, 346, 320, 350, 330, 300, 330);

  //Cabeça do boneco
  strokeWeight(4);
  fill(255);
  circle(posx_b - 15, posy_b, 30);

  pop(); //fim escala

  //Movimento
  posx_b -= velx_b;
  if (posx_c > 343) {
    posx_c -= velx_c;
  } else {
    vely_b += gravidade;
    posy_b += vely_b;
    if (posy_b > 330) {
      gravidade = 0;
      vely_b = 0;
      velx_b = 0;
    }
  }
}

//Atualiza canvas ao redimensionar
function windowResized() {
  escala = min(windowWidth / baseWidth, windowHeight / baseHeight);
  const cw = floor(baseWidth * escala);
  const ch = floor(baseHeight * escala);
  resizeCanvas(cw, ch);
  canvasElem.position(floor((windowWidth - width) / 2), floor((windowHeight - height) / 2));
}
