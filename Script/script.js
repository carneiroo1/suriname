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
        carrossel.src = "https://www.rewild.org/uploads/2025/09/unnamed.png?format=webp&optimize=high&precrop=16%3A9%2Csmart";
        await sleep(2000);
        carrossel.src = "https://cdn.britannica.com/03/36103-004-E95CD585/village-Maroni-River-Suri-Cottica.jpg?w=400&h=225&c=crop";
        await sleep(2000);
        carrossel.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_WdYdxvP_2Qtt4xixHY9MS7c-KgSw5D_QGMNGDfTjyaMmkWuM4fpaOMh&s=10";
        await sleep(2000);
        carrossel.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_5L050cJF62hgI7ntnhRu6WbQwL5T6vKnfp-s04t65nubSNlnIlr-sdqe&s=10";
    }
}