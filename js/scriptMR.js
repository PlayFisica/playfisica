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