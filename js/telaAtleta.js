/*section curiosidades e conquistas*/
function selecionarBtnCC(indice){
    const cards = document.querySelectorAll('.card-CC');
    const botoes = document.querySelectorAll('.btn-CC');

    cards.forEach(card => card.classList.remove('ativo'));
    botoes.forEach(botao => botao.classList.remove('ativo'));

    cards[indice].classList.add('ativo');
    botoes[indice].classList.add('ativo');
}


/*section linha do tempo*/
function selecionarAno(indice) {
    const cards = document.querySelectorAll('.card-linhaTempo');
    const botoes = document.querySelectorAll('.btn-linhaTempo');

    cards.forEach(card => card.classList.remove('ativo'));
    botoes.forEach(botao => botao.classList.remove('ativo'));

    cards[indice].classList.add('ativo');
    botoes[indice].classList.add('ativo');
}
