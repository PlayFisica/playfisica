//Declara as variáveis do carro azul
let posx_c1 = 10, vel_c1 = 0, acel_c1 = 0, massa_c1 = 4;

//Declara as variáveis do carro vermelho
let posx_c2 = 10, vel_c2 = 0, acel_c2 = 0, massa_c2 = 5;

//Declara a força que será aplicada nos carros
let forca = 5;

//Tamanho base da animação original
const baseWidth = 1000;
const baseHeight = 400;
let escala;
let canvasElem;

function setup() {
  //calcula escala que cabe na janela sem distorcer
  escala = min(windowWidth / baseWidth, windowHeight / baseHeight);

  //cria canvas com tamanho já escalado (assim background só pinta essa área)
  const cw = floor(baseWidth * escala);
  const ch = floor(baseHeight * escala);
  canvasElem = createCanvas(cw, ch);

  //centraliza o canvas na janela
  canvasElem.position(floor((windowWidth - width) / 2), floor((windowHeight - height) / 2));
  //opcional: remove margem de body / inline-block efeitos
  canvasElem.style('display', 'block');
}

function draw() {
  //fundo da área da animação (só o canvas)
  background(61, 61, 61);

  //desenhamos em coordenadas base (1000x400) mas escaladas para o canvas
  push();
  scale(escala); //agora 1 unidade de desenho = escala pixels no canvas

  //Faixas vermelhas de cima e baixo
  strokeWeight(1);
  fill(255, 0, 0);
  for (let i = 0; i < baseWidth; i += 120) {
    rect(i, 0, 60, 20);
    rect(i, 380, 60, 20);
  }

  //Faixas brancas
  fill(255);
  for (let i = 60; i < baseWidth; i += 120) {
    rect(i, 0, 60, 20);
    rect(i, 380, 60, 20);
  }

  //Faixas centrais
  rect(20, 190, 100, 20);
  rect(220, 190, 100, 20);
  rect(420, 190, 100, 20);
  rect(620, 190, 100, 20);

  //Chegada (xadrez)
  for (let y = 50; y <= 320; y += 30) {
    fill(255);
    square(860, y, 30);
    //alternância simples (preto) para efeito xadrez
    if ((y / 30) % 2 === 0) {
      fill(0);
      square(890, y, 30);
      fill(255);
    } else {
      fill(0);
      square(890, y, 30);
      fill(255);
    }
  }

  //Linha de chegada
  strokeWeight(20);
  stroke(255);
  line(820, 50, 820, 350);

  //Manchas na pista
  stroke(61, 61, 61, 200);
  line(200, 300, 400, 50);
  line(700, 300, 600, 50);
  line(800, 350, 900, 50);

  //Estrutura metálica do carro azul
  strokeWeight(0);
  fill(50, 50, 255);
  rect(posx_c1, 100, 140, 50, 0, 30, 30, 30);
  rect(posx_c1, 60, 90, 40, 50, 30, 0, 0);

  //Estrutura metálica do carro vermelho
  fill(255, 50, 50);
  rect(posx_c2, 290, 140, 50, 0, 30, 30, 30);
  rect(posx_c2, 250, 90, 40, 50, 30, 0, 0);

  //Rodas e faróis (azul)
  fill(100);
  circle(posx_c1 + 30, 150, 30);
  circle(posx_c1 + 110, 150, 30);
  fill(255);
  circle(posx_c1 + 30, 150, 15);
  circle(posx_c1 + 110, 150, 15);
  fill(100);
  ellipse(posx_c1 + 130, 125, 20, 10);
  fill(255);
  circle(posx_c1 + 135, 125, 6);

  //Janelas carro azul
  strokeWeight(1);
  fill(200);
  rect(posx_c1 + 10, 70, 30, 30, 50, 0, 0, 0);
  square(posx_c1 + 50, 70, 30, 0, 50, 0, 0);
  strokeWeight(3);
  line(posx_c1 + 45, 105, posx_c1 + 45, 135);

  //Rodas e faróis (vermelho)
  strokeWeight(0);
  fill(100);
  circle(posx_c2 + 30, 340, 30);
  circle(posx_c2 + 110, 340, 30);
  fill(255);
  circle(posx_c2 + 30, 340, 15);
  circle(posx_c2 + 110, 340, 15);
  fill(100);
  ellipse(posx_c2 + 130, 315, 20, 10);
  fill(255);
  circle(posx_c2 + 135, 315, 6);

  //Janelas carro vermelho
  strokeWeight(1);
  fill(200);
  rect(posx_c2 + 10, 260, 30, 30, 50, 0, 0, 0);
  square(posx_c2 + 50, 260, 30, 0, 50, 0, 0);
  strokeWeight(3);
  line(posx_c2 + 45, 295, posx_c2 + 45, 325);

  pop(); //fim escala

  //Física do movimento (usa coordenadas 'base' — OK com escala aplicada ao desenho)
  if (posx_c1 < 15) {
    acel_c1 = forca / massa_c1;
  }
  vel_c1 += acel_c1;
  posx_c1 += vel_c1;

  if (posx_c2 < 15) {
    acel_c2 = forca / massa_c2;
  }
  vel_c2 += acel_c2;
  posx_c2 += vel_c2;

  if (posx_c1 > 800) {
    acel_c1 = 0;
    vel_c1 = 0;
  }

  if (posx_c2 > 800) {
    acel_c2 = 0;
    vel_c2 = 0;
    posx_c2 = 850;
  }
}

function windowResized() {
  //recalcula escala e redimensiona o canvas (mantendo a animação proporcional)
  escala = min(windowWidth / baseWidth, windowHeight / baseHeight);
  const cw = floor(baseWidth * escala);
  const ch = floor(baseHeight * escala);
  resizeCanvas(cw, ch);

  //recentraliza
  canvasElem.position(floor((windowWidth - width) / 2), floor((windowHeight - height) / 2));
}
