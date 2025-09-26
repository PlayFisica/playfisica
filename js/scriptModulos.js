const header = document.querySelector("header");
const mediaMinQuery = window.matchMedia('(min-width: 900px)');

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);

})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');




function abrirPopup(num) {
  const popup = document.getElementById("popup" + num);
  const iframe = popup.querySelector("iframe");

  // Recarrega o iframe sempre que abrir
  iframe.src = iframe.src;
  popup.style.display = "flex";
}

function fecharPopup(num) {
  document.getElementById("popup" + num).style.display = "none";
}


menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
}

const sr = ScrollReveal ({
	distance: '60px', 
	duration: 2500,
	reset: true
})
sr.reveal('.home-text',{delay:200, origin:'left'});
//sr.reveal('.videos',{delay:200, origin:'left', });
if (mediaMinQuery.matches) {
	sr.reveal('.about-img',{delay:200, origin:'right'});
    sr.reveal('.material-img',{delay:200, origin:'right'});
}else{
	sr.reveal('.about-img',{delay:200, origin:'bottom'});
	sr.reveal('.material-img',{delay:200, origin:'bottom'});
}
sr.reveal('.container, .about, .menu, .contact, .modulos, .home-img',{delay:200, origin:'bottom'});









// Função que gera e RETORNA apenas o código HTML de cada exercício
function criarExercicio(num, tipo) {
  if (tipo === 0) {
    return `
    <div class="exercicio-item" id="ex${num}">
      <h2>Exercício ${num}</h2>
      <div class="exercicios-img">
        <img src="animations/${num}/${num}.png" alt="Exercício ${num}">
        <button class="btn-animacao" onclick="abrirPopup(${num})">
          <img src="img/play.png" alt="Play">
        </button>

        <!-- Popup escondido -->
        <div id="popup${num}" class="popup" style="display:none">
          <div class="popup-conteudo">
            <span class="fechar" onclick="fecharPopup(${num})">&times;</span>
            <iframe class="animation" src="animations/${num}/${num}.html" frameborder="0"></iframe>
          </div>
        </div>

        <details>
          <summary>
            <span class="toggle-text">Mostrar resposta</span>
            <span class="arrow">▶</span>
          </summary>
          <div class="resposta">
            <div class="exercicios-img">
              <img src="animations/${num}/code${num}.png" alt="Exercício ${num} Resposta">
            </div>
          </div>
        </details>
      </div>
    </div>
    `;
  } else {
    return `
    <div class="exercicio-item" id="ex${num}">
      <h2>Exercício ${num}</h2>
      <div class="exercicios-img">
        <img src="animations/${num}/${num}.png" alt="Exercício ${num}">
        <button class="btn-animacao" onclick="abrirPopup(${num})">
          <img src="img/play.png" alt="Play">
        </button>

        <div id="popup${num}" class="popup" style="display:none">
          <div class="popup-conteudo">
            <span class="fechar" onclick="fecharPopup(${num})">&times;</span>
            <iframe class="animation" src="animations/${num}/${num}.html" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
