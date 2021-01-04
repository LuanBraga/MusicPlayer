console.log('hello world');

window.onload = function(){

    let botaoMagico = document.querySelector("#botaoMagico");
    let botaoMagicoFecha = document.querySelector("#botaoMagicoFecha");
    let imagemCapa = document.querySelector(".imagemCapa");

    ocultaBotao(botaoMagicoFecha);
 
    botaoMagico.addEventListener("click", () => {

            minimizaCapa(imagemCapa);

            escondeBotao(botaoMagico);

            mostraBotao(botaoMagicoFecha);
        } );

    botaoMagicoFecha.addEventListener("click", () => {

            maximizaCapa(imagemCapa);

            escondeBotao(botaoMagicoFecha);

            mostraBotao(botaoMagico);

        } );

    function ocultaBotao(botao) {

        botao.style.display = 'none';
    }

    function minimizaCapa(capa) {

        capa.style.backgroundColor = 'rgb(77, 76, 161)';
    }

    function maximizaCapa(capa) {

        capa.style.backgroundColor = 'rgb(0, 255, 255)';
    }

    function escondeBotao(botao) {
        
        botao.classList.remove('zoonIn');

        botao.classList.add('zoonOut');

        setTimeout(function () {

            botao.style.display = 'none';
        }, 0200);
        
    }

    function mostraBotao(botao) {

        setTimeout(function () {

            botao.style.display = 'block';
        }, 0200);

        botao.classList.remove('zoonOut');

        botao.classList.add('zoonIn');
    }
}