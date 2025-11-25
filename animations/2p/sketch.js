// --- Variáveis da bola ---
let posx = 100, posy = 600;
let velx = 0, vely = 0;
let grav = 0.8;
let bolaLancada = false;
let imgBola;   // imagem da bola
//Imagem do obstáculo - RETIRADO
let imgChao;   // imagem do chão
let imgFundo;  // imagem de fundo

// --- Pontuação e nível ---
let pontos = 0;
let nivel = 1;

// --- Tentativas ---
let tentativas = 4;
let gameOver = false;

// --- Cesta ---
let cestaTimer = 0; // contador de frames para mostrar "CESTA!!!" // ALTERADO
let cestaX = 950;
let cestaY = 300;
let cestaLargura = 100;
let cestaAltura = 20;

// --- Obstáculo ---
let obsX = 600;
let obsY = 350;
let obsLarg = 50;   // largura menor do obstáculo // ALTERADO (antes 180)
let obsAlt = 180;
let obsVel = 3;
let obsVelMax = 15;


// --- Carrega imagens ---
function preload() {
  imgBola = loadImage('basketball.png');   // bola
  imgChao = loadImage('chao.png');         // chão
  imgFundo = loadImage('fundo.png');       // fundo
  // imgObs foi removido // ALTERADO
}

function setup() {
  createCanvas(1200, 700);
}

function draw() {
  // --- Fundo ---
  imageMode(CORNER);
  image(imgFundo, 0, 0, width, height);

  // --- Tela de Game Over ---
  if (gameOver) {
    drawGameOver();
    return;
  }

  // --- Chão ---
  image(imgChao, 0, 650, width, 50);

  // --- Cesta ---
  fill(150, 0, 0);
  rect(cestaX, cestaY, cestaLargura, cestaAltura);
  rect(cestaX + 40, cestaY - 100, 10, 100);

  // --- Obstáculo ---
  fill(200, 0, 0); // vermelho // ALTERADO (antes usava imagem imgObs)
  rect(obsX, obsY, obsLarg, obsAlt);

  // Movimento do obstáculo // ALTERADO UM POUCO
  obsY += obsVel;
  if (obsY <= 150){
    obsY = 150;
    obsVel *= -1;
  }else{
    if (obsY + obsAlt >= 650){
      obsY = 650 - obsAlt;
      obsVel *= -1;
    }
  }

  // --- Bola ---
  imageMode(CENTER);
  image(imgBola, posx, posy, 60, 60);

  // Física da bola
  if (bolaLancada) {
    //ALTERADO: gravidade vem primeiro
    posx += velx;
    vely += grav;
    posy += vely;

    // Colisão com o chão
    if (posy > 620) {
      posy = 620;
      vely *= -0.6;
      velx *= 0.8;

      if (abs(vely) < 1) { // ALTERADO (antes era < 2)
        bolaLancada = false;
        vely = 0;
        velx = 0;
      }
    }
  }

  // Colisão com obstáculo
  checarColisaoObstaculo();

  // Checar cesta
  checarCesta();

  // Checar erro
  checarErro();
  
  // Mostrar "CESTA!!!" se o contador estiver ativo
  if (cestaTimer > 0) { // ALTERADO (antes mostrava direto dentro de checarCesta)
    textSize(64);
    fill(0, 200, 0);
    text("CESTA!!! 🏀", 450, 200);
    cestaTimer--; // diminui a cada frame // ALTERADO
  }

  // HUD
  hud();
}


// ---------------- FUNÇÕES --------------------

function hud() {
  textAlign(LEFT, TOP);
  fill(255); //Cor Branca - ALTERADO
  textSize(24);
  
  text("Clique para lançar a bola!", 30, 40);
  text("Pontos: " + pontos, 30, 80);
  text("Nível: " + nivel, 30, 120);
  text("Tentativas: " + tentativas, 30, 160);
}

function checarColisaoObstaculo() {
  let RAIO = 30; // raio da bola

  if (
    posx + RAIO > obsX &&
    posx - RAIO < obsX + obsLarg &&
    posy + RAIO > obsY &&
    posy - RAIO < obsY + obsAlt
  ) {
    let penetraX = min(obsX + obsLarg - (posx - RAIO), (posx + RAIO) - obsX);
    let penetraY = min(obsY + obsAlt - (posy - RAIO), (posy + RAIO) - obsY);

    //Lógica alterada
    if (penetraX < penetraY) {
      // colisão horizontal → empurra para fora
      if (posx < obsX){
        posx = obsX - RAIO;
      }else{
        posx = obsX + obsLarg + RAIO;
      }
      velx *= -1;
    }else {
      // colisão vertical → empurra para fora
      if (posy < obsY){
        posy = obsY - RAIO;
      }else{
        posy = obsY + obsAlt + RAIO; 
      }
      vely *= -1;
    }
  }
}

function checarCesta() {
  if (
    bolaLancada && 
    posx > cestaX &&
    posx < cestaX + cestaLargura &&
    posy > cestaY - 10 &&
    posy < cestaY + cestaAltura &&
    vely > 0 // só pontua se estiver descendo // ALTERADO
  ) {
    cestaTimer = 60; // mostra por ~1 segundo (60 frames) //ALTERADO
    configurarNivel();
    resetarBola();
  }
}


function checarErro() {
  if (!bolaLancada) return;

  let RAIO = 30;
  let CHAO_Y = 620;

  // Saiu da tela
  if (
    posx < -RAIO || posx > width + RAIO ||   // ALTERADO (antes usava -RAIO*2 / width+RAIO*2)
    posy < -RAIO || posy > height + RAIO     // ALTERADO (antes usava -RAIO*2 / height+RAIO*2)
  ) {
    perderTentativa();
  }

  // Parou no chão (tolerância em vez de igualdade exata) // ALTERADO
  if (posy >= CHAO_Y && abs(vely) < 0.5 && abs(velx) < 0.5) {
    perderTentativa();
  }
}

function perderTentativa() {
  bolaLancada = false;

  if (tentativas > 0) {   // ALTERADO (antes decrementava direto sem checar)
    tentativas--;
  }

  if (tentativas <= 0) {
    gameOver = true;
  }

  resetarBola();
}



function resetarBola() {
  let POS_INICIAL_X = 100; // ALTERADO (antes valores fixos direto no código)
  let POS_INICIAL_Y = 600; // ALTERADO

  posx = POS_INICIAL_X;
  posy = POS_INICIAL_Y;
  velx = 0;
  vely = 0;
  bolaLancada = false;
  cestaTimer = 0; // ALTERADO (agora zera o contador da cesta também)
}


function drawGameOver() {
  textAlign(CENTER, CENTER);
  fill(255);//Cor Branca // ALTERADO

  textSize(50);
  text("FIM DE JOGO!", width/2, height/2 - 60);

  text("Pontuação: " + pontos, width/2, height/2);

  textSize(32);
  text("Pressione R para reiniciar", width/2, height/2 + 60);
}


function configurarNivel() {
  nivel++; 
  pontos++;
  tentativas = 4; 

  // nova posição da cesta
  cestaX = random(750, 1100);
  cestaY = random(150, 450);

  // nova posição do obstáculo (garante que não fique fora da tela) // ALTERADO
  obsX = random(300, max(300, cestaX - 200)); // ALTERADO (antes era apenas random simples)
  obsY = random(180, 430);
  obsAlt = random(120, 240); // ALTERADO (antes era fixo em 180)

  // aumenta velocidade do obstáculo
  obsVel *= 1.15; // ALTERADO (antes não havia multiplicador de dificuldade)
  obsVel = constrain(obsVel, -obsVelMax, obsVelMax); // ALTERADO (limite máximo de velocidade)
}

function reiniciarJogo() {
  pontos = 0;
  nivel = 1;
  tentativas = 4;
  gameOver = false;

  cestaX = 950;
  cestaY = 300;

  obsX = 600;
  obsY = 350;
  obsVel = 3;

  resetarBola();
}

function keyPressed() {
  if (gameOver && (key === 'r' || key === 'R')) {
    reiniciarJogo();
  }
}

function mousePressed() {
  if (!bolaLancada && !gameOver) {
    velx = (mouseX - posx) / 20;
    vely = (mouseY - posy) / 20;
    bolaLancada = true;
  }
}