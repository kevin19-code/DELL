var mod = document.getElementById("Modo")
var cupo = document.getElementById("Cuerpo")
var modo = document.getElementById("Claro")

mod.addEventListener("click", () => {

cupo.style.backgroundColor='rgb(12, 12, 12)'
cupo.style.color='rgb(196, 196, 196)'

mod.style.backgroundColor='rgb(17, 17, 17)'

mod.style.display="none"

modo.style.display="block"

}
)


modo.addEventListener("click", () => {

    cupo.style.backgroundColor='white'
    cupo.style.color='black'
    
    mod.style.backgroundColor='rgb(17, 17, 17)'
    
    mod.style.display="block"
    
    modo.style.display="none"
    
    }
    )








function Hola(){

    mod.style.backgroundColor="rgb(100,100,100)"
    modo.style.backgroundColor="rgb(88, 88, 88)"

}

function Adios(){

mod.style.backgroundColor="rgb(0, 0, 0)"
modo.style.backgroundColor="rgb(255, 255, 255)"

}


