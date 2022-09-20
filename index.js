function eleccionpc(){
    pc=Math.floor(Math.random()*3)+1   
}
function ganador(){
    if(pu>ppc){
        alert("el ganador es el usuario") 
    }
    else if(pu<ppc){
        alert("el ganador es el pc")
    }
    else{
        alert("es un empate")
    }
}
function puntos(){
    alert(`los puntos del usuario son ${pu} y los del pc son ${ppc}`)
}
function usuariopiedra(){
    if(e==1){
        eleccionpc()
        if(pc==2){
            alert("winer pc")
            ppc++
        }
        else if(pc==1){
            alert("empate")
        }
        else{
            alert("winer usuario")
            pu++
        }
    }
}
function usuariopapel(){
    if(e=2){
        eleccionpc()
        if(pc==2){
            alert("empate")
            
        }
        else if(pc==1){

            alert("winer usuario")
            pu++
        }
        else{
            alert("winer pc")
            ppc++
        }

    }
}
function usuariotijera(){
    if(e=3){
        eleccionpc()
        if(pc==2){
            alert("winer usuario")
            pu++
            
        }
        else if(pc==1){

            alert("winer pc")
            ppc++
        }
        else{
            alert("empate")
            
        }

    }

}
function elegir(){
    e=+prompt(`elije una opcion: 1:piedra  2:papel  3:tijera`)
}
function cantidadjuegos(){
    juegos=+prompt("cuantas veces quiere jugar");
}
ppc=0
pu=0
cantidadjuegos()
for(let i=0;i<juegos;i++){
    elegir()
    if(e==1){
        usuariopiedra()
    }
    else if(e==2){
        usuariopapel()
    }
    else{
        usuariotijera()
    }
}
puntos()
ganador()




