// Los operadores logicos son && = y. si tenemos mas de 2 condiciones unidas por el operador and (&&)
// todas deben ser verdaderas para que la condicion final lo sea.

function mayorYMenor(num){
    if (num > 5 && num < 10 && num % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

mayorYMenor(2);
mayorYMenor(8);
mayorYMenor(7);
mayorYMenor(6);


//operador || = or/o, basta solo con que una condicion sea verdadera para que la condicion final tambien lo sea.

function operadorOr(str){
    if (str === "Henry" || str.length < 2) {
        console.log(true);
    } else {
        console.log(false);
    }
}

operadorOr("Henry");
operadorOr("javascript");
operadorOr("A");


//operador ! = negacion.
//agregando el operador ! preguntamos lo contrario, entonces solo se imprime si es False.
//podemos preguntar si un valor es igual a otro y tambien podemos preguntar si son diferentes

function negacion(permiso){
    if(permiso !== true){
        console.log("Tiene permiso");
    }    
}

negacion(false);


function operacionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3){
        console.log(true);
    } else {
        console.log(false);
    }
}

operacionCompleja(10);
operacionCompleja(6);
operacionCompleja(3);
operacionCompleja(5);