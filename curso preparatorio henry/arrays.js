
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

//.push para anadir un elemento AL FINAL DEL ARREGLO
//var colores = ["amarillo", "azul"];
//console.log(colores);
//colores.push("rojo");
//console.log(colores); = amarillo, azul, rojo

//.unshift para anadirlo AL PRINCIPIO
//colores.unshift("verde");
//console.log(colores); = verde, amarillo, azul, rojo

//.pop para ELIMINAR el ULTIMO ELEMENTO de nuestro array
//colores.pop();
//console.log(colores); = verde, amarillo, azul

//.shift para ELIMINAR el PRIMER ELEMENTO de nuestro array
//colores.shift();
//console.log(colores); = amarillo, azul

//.includes para saber si nuestro array incluye un elemento o no (devuelve TRUE or FALSE).

//var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"];
//var incluyeDali = pintores.includes("Monet");
//console.log(incluyeDali); = TRUE

//.every nos permite saber si absolutamente todos los elementos de un array cumplen con una condicion.
//var numeros = [7, 6 ,8, 9];
//var cumpleCondicion = numeros.every((num) => {       dentro del parentesis va el parametro con el que trabajaremos, en este caso num (numeros)
//    return num > 5;       luego la condicion que se debe cumplir, numeros mayor a cinco.
//});
//console.log(cumpleCondicion);

// METODOS .split() SEPARAR  y .join() UNIR

//var palabra = "Henri";
//var palabraSeparada = palabra.split('');  separo la palabra en cada letra
//console.log(palabraSeparada); = h, e, n, r, i
//palabraSeparada.pop(); = h, e, n, r
//palabraSeparada.push('y'); = h, e, n, r, y
//console.log(palabraSeparada);
//var palabraArreglada = palabraSeparada.join(''); une las letras formando una palabra
//console.log(palabraArreglada); = henry

// si entre las comillas ponemos un (espacio) va separar/unir la palabra cada vez que haya un espacio, si ponemos una A va separar/unir cada vez que haya una A.


//METODOS para recorrer arreglos.
//.forEach() permite recorrer un array y realizar una accion pero no podemos realizar NINGUN CAMBIO.

//var numero = [1, 2, 3, 4];
//numero.forEach((num) => console.log(num)); = nos muestra todos los elementos del array
//numero.forEach((num)=> {
//    if(num === 3){
//        console.log(num); = nos muestra el numero 3 (si es que el arreglo lo contiene)
//    }
//});

//.map() nos permite recorrer y realizar cambios.

//var numeros = [1, 2, 3, 4];
//var masUno = numeros.map((num) => {
//    return num + 1;       le suma uno a cada elemento.
//});
//console.log(masUno); nos devuelve = 2, 3, 4, 5

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