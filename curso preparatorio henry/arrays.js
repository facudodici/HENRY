/* Los Arrays o Arreglos son OTRO tipo de dato dentro de Javascript (como los numeros o strings)
Nos permiten GUARDAR y GESTIONAR informacion, nos va servir cuando querramos almacenar muchos datos, como nombres de usuarios, compras de supermercado, etc
podemos pensar a los arrays como listas de datos a la que podemos acceder en CUALQUIER momento.
todas las listas de datos tinen distintas posiciones en las que se pueden guardar datos.
existen 2 conceptos: 
ELEMENTOS: son aquellos datos que hemos guardado
INDICE: no representan el dato, sino la posicion en la que se esta guardando.
siempre se cuenta el indice desde el 0 (cero).
*/

//var listaDeCompras = [];
//listaDeCompras[3] = "Tomates";
//listaDeCompras[1] = "Lechuga";
//console.log(listaDeCompras.length);

//para recuperar el arreglo:
//listaDeCompras[1];

//pero para imprimirlo en la consola y chequar que lo recuperamos:

//var elementosDelArray = listaDeCompras[1];
//console.log(elementosDelArray); 

// METODOS: length, permite saber la longitud del arreglo.

//.push para anadir un elemento.
//var colores = ["amarillo", "azul"];
//console.log(colores);
//colores.push("rojo");
//console.log(colores);

//.unshift para anadirlo al principio.
//colores.unshift("verde");
//console.log(colores);

//.pop para ELIMINAR el ultimo elemento de nuestro array
//colores.pop();
//console.log(colores);

//.shift para ELIMINAR el primer elemento de nuestro array
//colores.shift();
//console.log(colores);

//.includes para saber si nuestro array incluye un elemento o no (devuelve TRUE or FALSE).

//var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"];
//var incluyeDali = pintores.includes("Monet");
//console.log(incluyeDali);

//.every nos permite saber si absolutamente todos los elementos de un array cumplen con una condicion.
//var numeros = [7, 6 ,8, 9];
//var cumpleCondicion = numeros.every((num)=>{
//    return num > 5;
//});
//console.log(cumpleCondicion);

// METODOS .split()  y .join()

//var palabra = "Henri";
//var palabraSeparada = palabra.split('');
//console.log(palabraSeparada);
//palabraSeparada.pop();
//palabraSeparada.push('y');
//console.log(palabraSeparada);
//var palabraArreglada = palabraSeparada.join('');
//console.log(palabraArreglada);

//METODOS para recorrer arreglos.
//.forEach() permite recorrer un array y realizar una accion pero no podemos realizar NINGUN CAMBIO.

//var numero = [1, 2, 3, 4];
//numero.forEach((num) => console.log(num));
//numero.forEach((num)=> {
//    if(num === 3){
//        console.log(num);
//    }
//});

//.map() nos permite recorrer y realizar cambios.

//var numeros = [1, 2, 3, 4];
//var masUno = numeros.map((num) => {
//    return num + 1;
//});
//console.log(masUno);

//"BUCLES"
//Dentro del for se declara primero la variable de iteracion = 0.
//segundo dato, ¿que queremos iterar? ¿mientras se cumpla QUE condicion vamos a iterar este dato? SIRVE PARA CORTAR EL BUCLE.
//i++ para que sume de a 1.

//var arr = [1, 2, 3, 4, 5];
//for (var i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

//ENCONTRAR LETRA P

//function encontrarLetraP(string) {
//    var letras = string.split('');
//
//    for(var i = 0; i < letras.length; i++){
//     if (letras[i] === 'p') {
//        console.log('Si contiene a P');
//     }   
//    }
//}
//encontrarLetraP("JavaScript");
//encontrarLetraP("paula");
//encontrarLetraP("Henry");

var arr = [];
while(arr.length < 5){
    arr.push('BOOM');
}
console.log(arr);