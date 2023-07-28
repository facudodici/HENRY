// los bucles son una forma RAPIDA y SENCILLA de hacer procesos repetitivos.

// bucle FOR

var suma = 0;

for (var i=0; i<10; i++){
    suma = suma + 1;
    console.log(suma);
}

var suma = 0;

for (var i=0; i<5; i++){
    suma = suma + i;
    console.log('variable de iteracion: ', i);
}
console.log('variable suma: ', suma);


// bucle WHILE

var suma = 0;

while (suma < 3){
    suma = suma + 1;
    console.log(suma);
}