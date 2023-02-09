function viajar(destino){
    if (destino === "Brasil") {
        console.log("Gire a la IZQUIERDA");
    } else if (destino === "Argentina") {
        console.log("Gire a la DERECHA");
    } else {
        console.log("NOS PERDIMOS");
    }
}
viajar("España");

function puedeManejar(edad) {
    if (edad >= 18) {
        console.log(true);
    } else {
        console.log(false);
    }
}
puedeManejar(18);

//Aprendimos como nuestro codigo puede tomar distintos caminos dependiendo de algunas condiciones.
//Aprendimos a estructurar y anidar distintos condicionales.