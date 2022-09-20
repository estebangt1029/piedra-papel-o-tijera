ppc=0
pu=0
juegos=+prompt("cuantas veces quiere jugar");
for(let i=0;i<juegos;i++){
    e=+prompt(`elije una opcion: 1:piedra  2:papel  3:tijera`)
    if(e==1){
        pc=Math.floor(Math.random() * 3)+1
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
    else if(e=2){
        pc=Math.floor(Math.random() * 3)+1
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
    else{
        pc=Math.floor(Math.random()*3)+1
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
alert(`los puntos del usuario son ${pu} y los del pc son ${ppc}`)
if(pu>ppc){
    alert("el ganador es el usuario") 
}
else if(pu<ppc){
    alert("el ganador es el pc")
}
else{
    alert("es un empate")
}




