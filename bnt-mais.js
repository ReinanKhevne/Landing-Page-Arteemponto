var bntMais = document.querySelector('#botao')

bntMais.addEventListener('click', leiaMais)

    function leiaMais() {
        var pontos = document.querySelector('#pontos')
        var mais = document.querySelector('#mais')

        if (pontos.style.display === 'none') {
            pontos.style.display = 'inline'
            mais.style.display = 'none'
            bntMais.innerHTML = 'Leia Mais'
        }
        else {
            pontos.style.display = 'none'
            mais.style.display = 'inline'
            bntMais.innerHTML = 'Leia Menos'
        }
    }