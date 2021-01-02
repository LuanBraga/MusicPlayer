let botaoMagico = document.querySelector("input[name=checkbox]");
let imagemCapa = document.querySelector(".imagemCapa");

alteraCapa(imagemCapa);

function alteraCapa (capa) {
    capa.setAttribute("style","background-color: black")
}