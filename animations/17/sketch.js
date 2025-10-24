// Declara as variáveis de posição, velocidade e aceleração
let posy1 = 230, posy2 = 230, vely = 0, acel = 0;

// Declara as massas e a massa total
let massa1 = 5, massa2 = 15, massaTotal = 0;

// Declara os pesos e a gravidade
let Peso1 = 0, Peso2 = 0, gravidade = 1;

// Dimensões lógicas originais do desenho
const larguraBase = 800;
const alturaBase = 400;
let escala; // fator de multiplicação

function setup() {
  // Cria a tela do tamanho da janela
  createCanvas(windowWidth, windowHeight);

  // Calcula o fator de escala — mantém proporção sem cortar
  escala = min(width / larguraBase, height / alturaBase);

  // Calcula os pesos e a aceleração
  Peso1 = massa1 * gravidade;
  Peso2 = massa2 * gravidade;
  massaTotal = massa1 + massa2;
  acel = (Peso2 - Peso1) / massaTotal;
}

function draw() {
  background(240, 248, 255);

  // --- SUPORTE DA POLIA ---
  fill(120, 90, 60);
  rect(0, 0, 800 * escala, 40 * escala);

  fill(200);
  circle(400 * escala, 100 * escala, 60 * escala);

  fill(150);
  triangle(400 * escala, 100 * escala,
           330 * escala, 40 * escala,
           470 * escala, 40 * escala);

  // --- CHÃO ---
  fill(80, 150, 80);
  rect(0, 387 * escala, 800 * escala, 13 * escala);

  // --- BLOCO 1 ---
  fill(255, 120, 50);
  square(335 * escala, posy1 * escala, 60 * escala);
  line(370 * escala, 100 * escala, 370 * escala, posy1 * escala);

  // --- BLOCO 2 ---
  fill(70, 130, 180);
  square(405 * escala, posy2 * escala, 60 * escala);
  line(430 * escala, 100 * escala, 430 * escala, posy2 * escala);

  // --- MOVIMENTO ---
  vely = vely + acel;
  posy1 = posy1 - vely;
  posy2 = posy2 + vely;

  // --- INTERROMPE O MOVIMENTO AO CHEGAR AO CHÃO ---
  if (posy2 >= 327) {
    posy1 = 133;
    posy2 = 327;
    acel = 0;
    vely = 0;
  }
}

// Recalcula tudo ao redimensionar a janela
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  escala = min(width / larguraBase, height / alturaBase);
}
