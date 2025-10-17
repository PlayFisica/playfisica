//Declara as variáveis do quadrado
let posx = 225, posy = 0, velx = 2, vely = 2;

//Declara as variáveis de controle da pontuação
let pont1 = true, pont2 = true, pont3 = true;

//Declara a variável de controle de duas linhas
let controle =0;

//Declara a variável que conta a pontuação
let cont = 0;

function setup() {
  //Cria a tela
  createCanvas(800, 600);
}

function draw() {
  //Dar cor ao plano de fundo
  background(250, 227, 187);
  
  //Desenha o quadrado
  strokeWeight (1);
  fill (54, 76, 245),
  square (posx,posy,50);
  
  //Desenha os limites do trajeto
  line (100,0,100,300);
  line (100,300,400,300);
  line (400,300,400,600);
  line (400,0,400,200);
  line (400,200,700,200);
  line (700,200,700,600);
  
  //Controla o limite do quadrado em relação a duas linhas
  if (posx>=400){
      controle = -1;
  }
  if (posx<400){
      controle = 1;
  }
  
  //Permite a interação por meio do teclado
  if (keyIsPressed){
    if (keyCode === RIGHT_ARROW){
      if (posx>347){
        if (posy<200){
          posx = 347;
        }  
      }
      if (posx>647){
        if (posy>200){
          posx = 647;
        }  
      }
      posx = posx + velx;
    }
    if (keyCode === LEFT_ARROW){
      if (posx<104){
        posx = 104;
      }
      if (posy>247){
        if (posx<403){
          if (controle === -1){
             posx = 403; 
          }
        }
      }
      posx = posx - velx;
    }
    if (keyCode === UP_ARROW){
      if (posy<0){
        posy=0;
      }
      if (posy<203){
        if (posx>350){
          posy = 203;
        }
      }
      posy = posy - vely;
    }
    if (keyCode === DOWN_ARROW){
        if (posy>246){
          if (posx<403){
            if (controle === 1){
              posy = 246;
            }
          }
        }
      posy = posy + vely;
    }
  }
  
  //Define e controla a pontuação 1
  if (pont1 === true){
    if (posy>200){
      cont = cont + 1;
      pont1 = false;
    }
  }
  
  //Define e controla a pontuação 2
  if (pont2 === true){
    if (posx>400){
      cont = cont + 1;
      pont2 = false;
    }
  }
  
  //Define e controla a pontuação 3
  if (pont3 === true){
    if (posy>300){
      cont = cont + 1;
      pont3 = false;
    }
  }
  
  //Escreve na tela a pontuação
  fill (255,0,0);
  textSize (30);
  text ("Pontuação: " + cont,500,50);
  
  //Define o fim do jogo
  if (posy>=550){
    posy = 550;
    velx = 0;
    vely = 0;
    fill (204, 245, 154);
    rect (193,200,400,140);
    fill(0);
    textSize (70);
    text ("Fim de Jogo",200,300);
  }
}