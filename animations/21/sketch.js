function setup() {
  //Cria a tela
  createCanvas (800, 600);
}

function draw() {
  //Dar cor ao plano de fundo
  background(255);
  
  /*Desenha o retângulo vermelho caso o mouse 
  esteja dentro das coordenadas desejada*/
  if (mouseX<400){
    if (mouseY<300){
      fill (255,0,0);
      rect (0,0,400,300);
      /*Desenha o circulo preto seguindo o mouse 
      apenas na posição X*/
      fill (0,0,0);
      circle (mouseX,135,30);
    }
  }
  
  /*Desenha o retângulo verde caso o mouse 
  esteja dentro das coordenadas desejada*/
  if (mouseX>400){
    if (mouseY<300){
      fill (0,255,0);
      rect (400,0,400,300);
      /*Desenha o quadrado preto seguindo o mouse 
      apenas na posição Y*/
      fill (0,0,0);
      square (585,mouseY,30);
    }
  }
  
  /*Desenha o retângulo azul caso o mouse 
  esteja dentro das coordenadas desejada*/
  if (mouseX<400){
    if (mouseY>300){
      fill (0,0,255);
      rect (0,300,400,300);
      /*Desenha o triângulo preto seguindo o mouse 
      na posição X e na posição Y*/
      fill (0,0,0);
      triangle(mouseX,mouseY-50,mouseX-50,mouseY+50,mouseX+50,mouseY+50);
    }
  }
  
  /*Desenha o retângulo amarelo caso o mouse 
  esteja dentro das coordenadas desejada*/
  if (mouseX>400){
    if (mouseY>300){
      fill (255,255,0);
      rect (400,300,400,300);
      /*Desenha a linha preta seguindo o mouse 
      na posição X*/
      if (mouseX<600){
        line (mouseX,300,mouseX,600); 
      }
      else{
        /*Desenha a linha preta seguindo o mouse 
        na posição Y*/
        line (600,mouseY,800,mouseY);
      }
    }
  }
}