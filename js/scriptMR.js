const botoes = document.querySelectorAll('.aba-btn');
const conteudos = document.querySelectorAll('.conteudo');

botoes.forEach(btn => {
    btn.addEventListener('click', () => {
        // remove "ativo" de todos
        botoes.forEach(b => b.classList.remove('ativo'));
        conteudos.forEach(c => c.classList.remove('ativo'));

        // adiciona "ativo" ao clicado e mostra o conteúdo certo
        btn.classList.add('ativo');
        document.getElementById(btn.dataset.alvo).classList.add('ativo');
    });
});







function abrirPagina(endereco) {
    window.open(endereco, "_blank"); // abre em nova aba
}





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
