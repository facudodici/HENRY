// concepto de funcion: f(x)= x + 3 
// cuando le demos un valor a la variable x esta funcion nos dara un nuevo numero.
// ej: si a nuestra x le damos el valor 5, tendriamos de esa funcion un nuevo numero, el 8.

function sumaTres(x){
    console.log(x + 3);  
}

sumaTres(5);

//sintaxis de una funcion
/* 
"function" = es la palabra reservada para la funcion.
lo que sigue, sumaTres en este caso es el nombre que le vamos a dar a la funcion.
a continuacion sigue un parentesis, dentro de ellos vamos a describir el argumento o parametro, el cual sirve para darle informacion a la funcion
luego siguen las llaves {} a este espacio se lo conoce como cuerpo de la funcion
es aqui donde indicaremos las instrucciones de lo que realizara la funcion.

en el caso de arriba le estamos diciendo que cuando se ejecute la funcion imprima en la consola el valor de x sumado con el numero tres.
*/

//hay tres maneras diferentes de declarar una funcion.

//PRIMERA
function sumaTres(x){
    return x + 3;
}

//SEGUNDA
var sumaTres = function (x){
    return x + 3;
} // guardamos nuestra funcion dentro de una variable.

//TERCERA 
var sumaTres = (x) => {
    return x + 3;
}

//console.log = nos da una ayuda visual para saber cual es el valor de una variable. (ayuda para el programador).

//return = nos va indicar que valor nos debe devolver la funcion.