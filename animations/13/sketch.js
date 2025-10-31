//Declara as variáveis do canhão, da velocidade e gravidade
let x_canhao = 77, velx = 19, y_canhao = 467, vely = 18, gravidade = 1;

//Dimensões base da animação original
const baseWidth = 800;
const baseHeight = 600;
let escala;
let canvasElem;

function setup() {
  //Calcula fator de escala que mantém a proporção (4:3)
  escala = min(windowWidth / baseWidth, windowHeight / baseHeight);

  //Cria o canvas com tamanho já escalado
  const cw = floor(baseWidth * escala);
  const ch = floor(baseHeight * escala);
  canvasElem = createCanvas(cw, ch);

  //Centraliza o canvas na janela
  canvasElem.position(floor((windowWidth - width) / 2), floor((windowHeight - height) / 2));
  canvasElem.style('display', 'block');
}

function draw() {
  background(143, 223, 235);

  //Aplica escala para manter proporções originais
  push();
  scale(escala);

  //Desenha o sol
  fill(250, 242, 22);
  circle(100, 100, 100);

  //Desenha o cacto
  fill(76, 179, 62);
  strokeWeight(0);
  rect(325, 355, 40, 200, 50);
  rect(275, 380, 30, 100, 50);
  rect(275, 450, 90, 30, 50);
  rect(390, 400, 30, 100, 50);
  rect(345, 470, 65, 30, 50);

  //Desenha o chão
  fill(247, 243, 131);
  rect(0, 535, 800, 100);

  //Desenha a bola de canhão
  fill(20);
  circle(x_canhao, y_canhao, 20);

  //Desenha o canhão
  fill(150);
  quad(50, 475, 70, 490, 95, 465, 80, 450);
  fill(50);
  circle(50, 495, 50);
  circle(40, 520, 30);
  fill(255);
  circle(40, 520, 15);

  pop();

  //Aplica o lançamento oblíquo (mesmo cálculo, não depende da escala)
  x_canhao += velx;
  vely -= gravidade;
  y_canhao -= vely;

  //Detecção do chão
  if (y_canhao > 523) {
    y_canhao = 523;
    x_canhao = 790;
  }
}

function windowResized() {
  //Recalcula escala ao redimensionar a tela
  escala = min(windowWidth / baseWidth, windowHeight / baseHeight);

  const cw = floor(baseWidth * escala);
  const ch = floor(baseHeight * escala);
  resizeCanvas(cw, ch);

  //Recentraliza o canvas
  canvasElem.position(floor((windowWidth - width) / 2), floor((windowHeight - height) / 2));
}
