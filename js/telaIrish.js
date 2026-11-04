function selecionarPremio(indice) {
    const cards = document.querySelectorAll('.premio-container');
    const botoes = document.querySelectorAll('.btn-premio');

    cards.forEach(card => card.classList.remove('ativo'));
    botoes.forEach(botao => botao.classList.remove('ativo'));

    cards[indice].classList.add('ativo');
    botoes[indice].classList.add('ativo');
}