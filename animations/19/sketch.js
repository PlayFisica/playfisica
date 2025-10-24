// Declara as variáveis das posições e das velocidades do círculo
let posx = 100, posy = 100, velx = 20, vely = 20;

// Declara a gravidade e o coeficiente de restituição
let gravidade = 1, e = 0.9;

// Dimensões lógicas originais
const larguraBase = 800;
const alturaBase = 400;
let escala; // fator de multiplicação

function setup() {
  // Cria a tela ajustável ao tamanho da janela
  createCanvas(windowWidth, windowHeight);
  
  // Calcula o fator de escala — mantém proporção máxima sem cortar
  escala = min(width / larguraBase, height / alturaBase);
}

function draw() {
  // Fundo
  background(249, 249, 113);

  // --- CÍRCULO ---
  fill(255, 199, 79);
  circle(posx * escala, posy * escala, 50 * escala);

  // --- CHÃO ---
  fill(125, 83, 4);
  rect(0, 350 * escala, 800 * escala, 50 * escala);

  // --- MOVIMENTO HORIZONTAL ---
  posx += velx;

  // --- MOVIMENTO VERTICAL ---
  vely += gravidade;
  posy += vely;

  // --- COLISÕES NO EIXO X ---
  if (posx > 775) {
    posx = 775;
    velx = -e * velx;
  }
  if (posx < 25) {
    posx = 25;
    velx = -e * velx;
  }

  // --- COLISÕES NO EIXO Y ---
  if (posy > 325) {
    posy = 325;
    vely = -e * vely;
  }
  if (posy < 25) {
    posy = 25;
    vely = -e * vely;
  }
}

// Atualiza tudo ao redimensionar a janela
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  escala = min(width / larguraBase, height / alturaBase);
}
