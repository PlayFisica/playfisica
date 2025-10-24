// Declara a massa, posição inicial, o ponto de equilíbrio da mola, a velocidade inicial e a aceleração
let massa = 500, pos = 100, repouso = 200, vel = 0, acel = 0;

// Declara a Força Elástica, a constante elástica e a deformação
let Fel = 0, k = 2, x = 0;

// Dimensões lógicas originais
const larguraBase = 800;
const alturaBase = 400;
let escala; // fator de multiplicação

function setup() {
  // Cria a tela proporcional ao tamanho da janela
  createCanvas(windowWidth, windowHeight);
  
  // Calcula o fator de escala — mantém a proporção máxima sem cortar
  escala = min(width / larguraBase, height / alturaBase);
}

function draw() {
  background(255);

  // --- CHÃO ---
  fill(156, 95, 3);
  rect(0, 330 * escala, 800 * escala, 70 * escala);

  // --- SUPORTE DA MOLA ---
  fill(0);
  rect(0, 270 * escala, 20 * escala, 60 * escala);

  // --- FÍSICA DA MOLA ---
  x = pos - repouso;
  Fel = -k * x;
  acel = Fel / massa;
  vel += acel;
  pos += vel;

  // --- MOLA ---
  stroke(0);
  strokeWeight(2);
  line(20 * escala, 300 * escala, pos * escala, 300 * escala);

  // --- BLOCO ---
  noStroke();
  fill(195, 224, 4);
  square(pos * escala, 270 * escala, 60 * escala);
}

// Atualiza tudo quando a janela é redimensionada
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  escala = min(width / larguraBase, height / alturaBase);
}
