function buscar() {
    var team = window.document.getElementById('time')
    var logo = window.document.getElementById('logo')
    var res = window.document.getElementById('camp')
    var timee = String(team.value)
    if(timee == 'palmeiras') {
        res.innerHTML = 'Libertadores e CAMPEÃO! 1º Lugar'
        logo.src = 'img/palmeiras.png'
    } else if(timee == 'grêmio') {
        res.innerHTML = 'Libertadores e vice-CAMPEÃO! 2º Lugar'
        logo.src = 'img/gremio.png'
    } else if (timee == 'atlético-mg') {
        res.innerHTML = 'Libertadores! 3º Lugar'
        logo.src = 'img/atl mg.png'
    } else if (timee == 'flamengo') {
        res.innerHTML = 'Libertadores! 4º Lugar'
        logo.src = 'img/flamengo.png'
    } else if (timee == 'botafogo') {
        res.innerHTML = 'Pré - Libertadores! 5º Lugar'
        logo.src = 'img/botafogo.png'
    } else if(timee == 'bragantino') {
        res.innerText = 'Pré - Libertadores! 6º Lugar'
        logo.src = 'img/bragantino.png'
    } else if (timee == 'fluminense') {
        res.innerHTML = 'CAMPEÃO DA LIBERTADORES! 7º Lugar'
        logo.src = 'img/fluminense.png'
    } else if(timee == 'athletico-pr') {
        res.innerHTML = 'Sul - Americana! 8º Lugar'
        logo.src = 'img/atl pr.png'
    } else if(timee == 'internacional') {
        res.innerHTML = 'Sul - Americana! 9º Lugar'
        logo.src = 'img/internacional.png'
    } else if(timee == 'fortaleza') {
        res.innerHTML = 'Sul - Americana! 10º Lugar'
        logo.src = 'img/fortaleza.png'
    } else if(timee == 'são paulo') {
        res.innerHTML = 'CAMPEÃO da Copa do Brasil! 11º lUGAR'
        logo.src = 'img/saopaulo.png'
    } else if (timee == 'cuiabá') {
        res.innerHTML = 'Sul - Americana! 12º Lugar'
        logo.src = 'img/cuiaba.png'
    } else if(timee == 'corinthians') {
        res.innerHTML = 'Sul - Americana! 13º Lugar'
        logo.src = 'img/corinthians.png'
    } else if(timee == 'cruzeiro') {
        res.innerHTML = 'Sul - Americana! 14º Lugar'
        logo.src = 'img/cruzeiro.png'
    } else if(timee == 'vasco') {
        res.innerHTML = '15º Lugar'
        logo.src = 'img/vasco.png'
    } else if(timee == 'bahia') {
        res.innerHTML = '16º Lugar'
        logo.src = 'img/bahia.png'
    } else if(timee == 'santos') {
        res.innerHTML = 'REBAIXADO! 17º Lugar'
        logo.src = 'img/santos.webp'
    } else if (timee == 'goiás') {
        res.innerHTML = 'REBAIXADO! 18º Lugar'
        logo.src = 'img/goias.png'
    } else if(timee == 'coritiba') {
        res.innerHTML = 'REBAIXADO! 19º Lugar'
        logo.src = 'img/coritiba.png'
    } else if (timee == 'américa-mg') {
        res.innerHTML = 'REBAIXADO! 20º Lugar'
        logo.src = 'img/america.png'
    }
     else {
        res.innerHTML = 'Digite um time! Escreve tudo minúsculo!<br>Exemplo: corinthians'
    }
}