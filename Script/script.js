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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function mudarCarrossel() {
    while(true) {
        carrossel.src = "/img/Natureza Suriname-Home.jpg";
        await sleep(2000);
        carrossel.src = "/img/Praia Suriname-Home.jpg";
        await sleep(2000);
        carrossel.src = "/img/Urbano Suriname-Home.jpeg";
        await sleep(2000);
        carrossel.src = "/img/Boas Vindas Suriname-Home.jpg";
        await sleep(2000);
    }
}

function virarcard(card){
    card.classList.toggle('flip')
}