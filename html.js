const buttonSubmit = document.getElementById("buttonSubmit");

function buttonHasClicked(evento) {
    evento.preventDefault();
    document.getElementById("meu-formulario").style.background = "blue"
    document.querySelector("body").style.background = "green"
}

buttonSubmit.addEventListener("click", buttonHasClicked) 