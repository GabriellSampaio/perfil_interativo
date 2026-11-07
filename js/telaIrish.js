function selecionarAno(indice) {
    const cards = document.querySelectorAll('.linhaDoTempo-card');
    const botoes = document.querySelectorAll('.btn-linhaTempo');

    cards.forEach(card => card.classList.remove('ativo'));
    botoes.forEach(botao => botao.classList.remove('ativo'));

    cards[indice].classList.add('ativo');
    botoes[indice].classList.add('ativo');
}