// --- FÍSICA ---
let gravidade = 0.2;
let Forca_de_Arrasto = 0, coef_Arrasto = 0.5;

// --- CAIXA EM QUEDA LIVRE ---
let Peso1 = 0, massa1 = 5, acel1, vely1 = 0, posy1 = 70;

// --- CAIXA COM PARAQUEDAS ---
let Peso2 = 0, massa2 = 5, acel2, vely2 = 0, posy2 = 70;

// --- BASE DE REFERÊNCIA (RESOLUÇÃO ORIGINAL) ---
const larguraBase = 800;
const alturaBase = 600;
let escala;

function setup() {
  createCanvas(windowWidth, windowHeight);
  escala = min(width / larguraBase, height / alturaBase);
}

function draw() {
  background(220);
  strokeWeight(0);

  // --- CÉU VERMELHO ---
  fill(244, 68, 45);
  rect(0, 0, 800 * escala, 250 * escala);

  // --- NUVENS AZUIS ESCURAS ---
  fill(165, 167, 218);
  ellipse(120 * escala, 250 * escala, 160 * escala, 80 * escala);
  ellipse(500 * escala, 250 * escala, 160 * escala, 250 * escala);

  // --- NUVENS BRANCAS ---
  fill(249, 254, 255);
  ellipse(50 * escala, 250 * escala, 160 * escala, 190 * escala);
  ellipse(420 * escala, 250 * escala, 160 * escala, 190 * escala);
  ellipse(320 * escala, 250 * escala, 120 * escala, 80 * escala);
  ellipse(730 * escala, 250 * escala, 160 * escala, 190 * escala);

  // --- NUVENS AZUIS CLARAS ---
  fill(200, 217, 243);
  ellipse(0 * escala, 250 * escala, 120 * escala, 140 * escala);
  ellipse(800 * escala, 250 * escala, 150 * escala, 140 * escala);

  // --- CÉU AZUL ---
  fill(104, 130, 243);
  rect(0, 250 * escala, 800 * escala, 350 * escala);

  // --- MONTANHAS CINZAS ---
  fill(126, 142, 168);
  triangle(0 * escala, 350 * escala, 0 * escala, 600 * escala, 350 * escala, 600 * escala);
  triangle(320 * escala, 450 * escala, 340 * escala, 530 * escala, 395 * escala, 400 * escala);

  // --- MONTANHAS VERDE-AZUL ESCURO ---
  fill(58, 115, 124);
  triangle(500 * escala, 180 * escala, 300 * escala, 600 * escala, 500 * escala, 600 * escala);
  fill(43, 101, 113);
  triangle(500 * escala, 180 * escala, 560 * escala, 285 * escala, 500 * escala, 385 * escala);

  // --- MONTANHAS VERDES CLARAS ---
  fill(83, 142, 84);
  triangle(235 * escala, 200 * escala, 100 * escala, 600 * escala, 235 * escala, 600 * escala);
  triangle(620 * escala, 170 * escala, 380 * escala, 600 * escala, 620 * escala, 600 * escala);
  triangle(800 * escala, 370 * escala, 755 * escala, 450 * escala, 800 * escala, 540 * escala);

  // --- MONTANHAS VERDES ESCURAS ---
  fill(51, 108, 63);
  triangle(235 * escala, 200 * escala, 370 * escala, 600 * escala, 235 * escala, 600 * escala);
  triangle(620 * escala, 170 * escala, 830 * escala, 600 * escala, 620 * escala, 600 * escala);

  // --- TRIÂNGULO VERMELHO ---
  fill(125, 51, 50);
  triangle(0 * escala, 500 * escala, 0 * escala, 600 * escala, 60 * escala, 600 * escala);

  // --- CAIXAS ---
  fill(208, 143, 77);
  square(150 * escala, posy1 * escala, 50 * escala);
  square(550 * escala, posy2 * escala, 50 * escala);

  // --- LADOS DAS CAIXAS ---
  fill(173, 113, 59);
  quad(135 * escala, (posy1 - 10) * escala, 150 * escala, posy1 * escala, 150 * escala, (posy1 + 50) * escala, 135 * escala, (posy1 + 40) * escala);
  quad(535 * escala, (posy2 - 10) * escala, 550 * escala, posy2 * escala, 550 * escala, (posy2 + 50) * escala, 535 * escala, (posy2 + 40) * escala);

  // --- TAMPO DAS CAIXAS ---
  fill(183, 133, 74);
  quad(135 * escala, (posy1 - 10) * escala, 185 * escala, (posy1 - 10) * escala, 200 * escala, posy1 * escala, 150 * escala, posy1 * escala);
  quad(535 * escala, (posy2 - 10) * escala, 585 * escala, (posy2 - 10) * escala, 600 * escala, posy2 * escala, 550 * escala, posy2 * escala);

  // --- PARAQUEDAS ---
  fill(1, 202, 150);
  ellipse(570 * escala, (posy2 - 90) * escala, 170 * escala, 100 * escala);
  strokeWeight(2 * escala);
  line(488 * escala, (posy2 - 80) * escala, 535 * escala, (posy2 + 20) * escala);
  line(653 * escala, (posy2 - 80) * escala, 602 * escala, (posy2 + 20) * escala);

  // --- FÍSICA ---
  // Caixa 1: queda livre
  Peso1 = massa1 * gravidade;
  acel1 = Peso1 / massa1;
  vely1 += acel1;
  posy1 += vely1;
  if (posy1 > 550) {
    vely1 = 0;
    posy1 = 550;
  }

  // Caixa 2: resistência do ar (paraquedas)
  Forca_de_Arrasto = coef_Arrasto * vely2;
  Peso2 = massa2 * gravidade;
  acel2 = (Peso2 - Forca_de_Arrasto) / massa2;
  vely2 += acel2;
  posy2 += vely2;
  if (posy2 > 550) {
    vely2 = 0;
    posy2 = 550;
  }
}

// --- REAJUSTE AO REDIMENSIONAR A JANELA ---
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  escala = min(width / larguraBase, height / alturaBase);
}
