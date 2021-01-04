console.log('hello world');

let botaoMagico = document.querySelector("#botaoMagico");
let botaoMagicoFecha = document.querySelector("#botaoMagicoFecha");
let imagemCapa = document.querySelector(".imagemCapa");

window.onload = function(){

    escondeBotao(botaoMagicoFecha);

    botaoMagico.addEventListener("click", function () {

        minimizaCapa(imagemCapa);
        escondeBotao(botaoMagico);
        mostraBotao(botaoMagicoFecha);
    } );

    botaoMagicoFecha.addEventListener("click", function () {

        maximizaCapa(imagemCapa);
        escondeBotao(botaoMagicoFecha);
        mostraBotao(botaoMagico);

    } );

    function minimizaCapa(capa) {

        capa.style.backgroundColor = 'rgb(77, 76, 161)';
    }

    function maximizaCapa(capa) {

        capa.style.backgroundColor = 'rgb(0, 0, 0)';
    }

    function escondeBotao(botao) {
        botao.style.display = 'none';
    }

    function mostraBotao(botao) {
        botao.style.display = 'block';
    }
}