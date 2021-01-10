console.log('hello world');

window.onload = function(){

    let botaoMagico = document.querySelector("#botaoMagico");
    let botaoMagicoFecha = document.querySelector("#botaoMagicoFecha");
    let imagemCapa = document.querySelector(".imagemCapa");
    let telaFundo = document.querySelector(".tela");

    ocultaBotao(botaoMagicoFecha);
 
    botaoMagico.addEventListener("click", () => {

            minimizaCapa(imagemCapa);

            escondeBotao(botaoMagico);

            mostraBotao(botaoMagicoFecha);

            setTimeout(function() {telaFundo.classList.add("tela-background-color")}, 0300);
        } );

    botaoMagicoFecha.addEventListener("click", () => {

            maximizaCapa(imagemCapa);

            escondeBotao(botaoMagicoFecha);

            mostraBotao(botaoMagico);

            setTimeout(function() {telaFundo.classList.remove("tela-background-color")}, 0300);
        } );

    function ocultaBotao(botao) {

        botao.style.display = 'none';
    }

    function minimizaCapa(capa) {

        
        capa.classList.remove('scale-plus');
        capa.classList.add('scale-minus');
        capa.style.backgroundColor = 'rgb(24, 23, 109)';
        
    }

    function maximizaCapa(capa) {
        
        capa.classList.remove('scale-minus');
        capa.classList.add('scale-plus');
        capa.style.backgroundColor = 'rgb(0, 255, 255)';
    }

    function escondeBotao(botao) {
        
        botao.classList.remove('zoonIn');

        botao.classList.add('zoonOut');

        setTimeout(function() {botao.style.display = 'none';}, 0200);
        
    }

    function mostraBotao(botao) {

        setTimeout(function() {botao.style.display = 'block';}, 0200);

        botao.classList.remove('zoonOut');

        botao.classList.add('zoonIn');
    }
}