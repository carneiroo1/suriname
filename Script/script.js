menu = document.getElementById("burger-menu-icon")
let navbar = document.getElementById("menu-nav")


function alterarmenu() {
    navbar.classList.toggle("escondido");   
    if (navbar.classList.contains("escondido")) {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "inline-block";
    }
}

let passagemdasimagens = 0

function mostrarSlide(){
    const slides = document.querySelectorAll('.carrosel-inner')
    if(passagemdasimagens >= slides.length){
        passagemdasimagens = 0
    } else if (passagemdasimagens < 0){
        passagemdasimagens = slides.length - 1;
    }
    else {
        passagemdasimagens = index
    }
    const offset = -passagemdasimagens *100
    document.getElementById('carrosel-jv').style.transform = `translateX(${offset})`;
    
}
