menu = document.getElementById("burger-menu-icon")
let navbar = document.getElementById("menu-nav")
let carrossel = document.getElementById("carrossel")

function alterarmenu() {
    navbar.classList.toggle("escondido");   
    if (navbar.classList.contains("escondido")) {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "inline-block";
    }
}

let imagens = [
    "/img/carrossel-1.jpg",
    "/img/Praia Suriname-Home.jpg",
    "/img/carrossel-2.avif",
    "/img/carrossel-3.jpg"
];

let indiceAtual = 0;
let intervalo;

function trocarImagem(indice) {

    const carrossel = document.getElementById("carrossel");

    indiceAtual = indice;
    carrossel.src = imagens[indiceAtual];

    document.getElementById(`slide${indiceAtual + 1}`).checked = true;
}

function iniciarIntervalo() {

    clearInterval(intervalo);

    intervalo = setInterval(() => {

        indiceAtual = (indiceAtual + 1) % imagens.length;

        trocarImagem(indiceAtual);

    }, 2000);
}

function mudarCarrossel() {

    const radios = document.querySelectorAll('input[name="slide"]');

    radios.forEach((radio, indice) => {

        radio.addEventListener("change", () => {

            trocarImagem(indice);

            iniciarIntervalo();

        });

    });

    iniciarIntervalo();
}

function virarcard(card){
    card.classList.toggle('flip')
}