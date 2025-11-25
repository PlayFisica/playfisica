let started = 0

let cursor1 = 200
let cursor2 = 200
//Acrescentei mais duas variáveis do cursor
//Elas vão armazenar a posição x dos cursores
let cursor1x = 25 
let cursor2x = 755

let cor_bola = 1

let bolax = 400
let bolay = 250

let rebatidas = 0

let velx;
let vely = 0

let jogador1 = 0
let jogador2 = 0

function setup() {
  createCanvas(800, 500);
  
  //Coloquei isso para na primeira vez que o jogo for jogado, a bola ir ou para a direita ou para a esquerda de maneira aleatória
  if (random(1) < 0.5) {
    velx = 6;
  }
  else {
    velx = -6;
  }
}

function draw() {
  //Retirei o segundo if e coloquei um else
  if (rebatidas < 5 ) {
    background(134, 222, 87);
  }
  else{
    background(134,222,87,80)
  }

  // Linhas
  fill(255)
  noStroke()
  rect(395,0,10,500)
  rect(0,25,801,10)
  rect(0,460,801,10)
  rect(170,25,10,440)
  rect(623,25,10,440)
  rect(170,245,456,12)
  
  // Placar
  textSize(25)
  fill(0,0,0)
  rect(320,2,157,19)
  fill(255,255,255)
  text(jogador1,333,20)
  text(jogador2,450,20)
  
  stroke(0,0,0)
  // Cursor 1
  rect(cursor1x,cursor1,20,100)
  // Cursor 2
  rect(cursor2x,cursor2,20,100)
  
  // Bola
  if (cor_bola==2){
    fill(201, 91, 60)
  }
  if (cor_bola==3){
    //Adicionei a cor amarela, pode mudar se quiser
    fill(255, 255, 0)
  }
  circle(bolax,bolay,30)
  
  if ( rebatidas > 4 ) {
    cor_bola = 2
  }
  //Esse if estava dentro do de cima, eu retirei
  if ( rebatidas > 9) {
    cor_bola = 3
  }
  
  //Retirei o segundo if e coloquei else
  if ( started == 0 ) {
    fill(0)
    text("Clique em espaço para iniciar o jogo!",190,200)
  }
  else{
    start()
  }
}

function keyPressed () {
  if (keyCode === 32 ) {
    if (jogador1 == 0 && jogador2 == 0 ) {
      started = 1
    }
  if (jogador1 == 10 ) {
      bolax = 400
      bolay = 250
      jogador2 = 0
      jogador1 = 0
      //Coloquei o started com o valor 0 para voltar para a tela inicial
      started = 0
      //Coloquei a velx com o valor -6 para que o jogador 1 começasse com a bola depois de ter vencido o jogo anterior
      velx = -6
      cursor1 = 200
      cursor2 = 200
  }
  if (jogador2 == 10 ) { 
      bolax = 400
      bolay = 250
      jogador2 = 0
      jogador1 = 0
      //Coloquei o started com o valor 0 para voltar para a tela inicial
      started = 0
      //Coloquei a velx com o valor 6 para que o jogador 2 começasse com a bola depois de ter vencido o jogo anterior
      velx = 6
      cursor1 = 200
      cursor2 = 200
    }
  }
}

function start () {
  
  // Movimento da bola
  bolax += velx
  bolay += vely

  // Limites com as paredes
  //
  if ( bolay > 485 ) {
    bolay = 485
    vely = vely * -1
  }
  if ( bolay < 15 ) {
    bolay = 15
    vely = vely * -1
  }

  if ( bolax > 785 ) {
    jogador1 += 1
    bolax = 785
    velx = 6
    velx = velx * -1
    rebatidas = 0
    cor_bola = 1
  }
  if ( bolax < 15 ) {
    jogador2 += 1
    bolax = 15
    velx = 6
    velx = velx * 1
    rebatidas = 0
    cor_bola = 1
  }

  // Colisão com raquete esquerda (somente frente)
  //Corrigir a colisão para ser baseada no cursor1x
  if (velx < 0 && bolax - 15 <= cursor1x+20) { 
    if (bolay > cursor1 && bolay < cursor1 + 100) {
      //Retirada dos if pois era desnecessário
      //Correção do fixamento da posição x da bola
      bolax = 60; // impede atravessar
      velx *= -1
      vely += random(-2,2)
      rebatidas += 1
    }
  }
  
  // Colisão com raquete direita (somente frente)
  //Corrigir a colisão para ser baseada no cursor2x
  if (velx > 0 && bolax + 15 >= cursor2x) {
    if (bolay > cursor2 && bolay < cursor2 + 100) {
      //Retirada dos ifs pois era desnecessários.
      //Correção do fixamento da posição x da bola
      bolax = 740;
      //A velocidade da bola só aumenta quando colique com essa raquete
      velx += 1
      velx *= -1
      vely += random(-2,2)
      rebatidas += 1
    }
  }
  
  //Retirada de todos os "if else" pois só era preciso mudar a lógica do if e dava tudo certo
  if ( keyIsDown(UP_ARROW) ) {
    if ( cursor2 != 0) {
      cursor2 -= 5 
    }
  }
  if ( keyIsDown(DOWN_ARROW) ) {
    if ( cursor2 != 400) {
      cursor2 += 5 
    }
  }
  
  if ( keyIsDown(87) ) {
    if ( cursor1 != 0) {
      cursor1 -= 5 
    }
  }
  if ( keyIsDown(83) ) {
    if ( cursor1 != 400) {
      cursor1 += 5 
    }
  }
  
  // Encerramento do jogo
  if ( jogador1 == 10 ) {
    velx = 0
    vely = 0
    rebatidas = 0
    fill(0)
    text("O jogador 1 é o campeão!", 240, 200)
    //Adicionei o texto abaixo para reiniciar
    text("Pressione espaço para reiniciar.", 205, 250)
  }
  
  if ( jogador2 == 10 ) {
    rebatidas = 0
    velx = 0
    vely = 0
    fill(0)
    text("O jogador 2 é o campeão!", 240, 200)
    //Adicionei o texto abaixo para reiniciar
    text("Pressione espaço para reiniciar.", 205, 250)
  }
}
