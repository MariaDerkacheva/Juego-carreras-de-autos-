//oculto la pista de juego
let contenedorInicio = document.getElementById("contenedorInicio")
let contenedorJuego = document.getElementById("contenedorJuego")
let contenedorFinal = document.getElementById("contenedorFinal")


contenedorJuego.style.display ="none"
contenedorFinal.style.display ="none"


document.getElementById("botonComienzo").addEventListener("click", function () {
    contenedorInicio.style.display ="none"
    contenedorJuego.style.display ="inline"
    
})

let autoRojo = document.getElementById("autoRojo")
let autoAzul = document.getElementById("autoAzul")

let x = 0;
let y = 0; 
let varH3 = document.querySelector("h3")


document.addEventListener("keydown",evento=> { 
   
    //********* auto rojo **********/
   if (evento.keyCode == "39") {
        autoRojoDerecho()
    
        if (x >= "1650") {
            volverJugar()
            varH3.textContent = "El ganador es el Auto Rojo"
        }
   }

    //********* auto azul **********/
   if (evento.keyCode == "65") { // es la letra A
        autoAzulDerecho()

        if (x >= "1650") {
            volverJugar()
            varH3.textContent = "El ganador es el Auto Azul"
        }
    }
})

 //********* auto rojo **********/
function autoRojoDerecho() {
    x= x + 150;
    autoRojo.style.marginLeft = x + "px";
}


//********* auto azul **********/
function autoAzulDerecho() {
    x= x + 5;
    autoAzul.style.marginLeft = x + "px";
}

//********* Boton volver a jugar **********/
function volverJugar() {
    contenedorFinal.style.display ="inline"
    contenedorJuego.style.display="none"

}


