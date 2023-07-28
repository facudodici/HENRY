// Los operadores logicos son && = y. si tenemos mas de 2 condiciones unidas por el operador and (&&)
// todas deben ser verdaderas para que la condicion final lo sea.

function mayorYMenorYPar(num){
    if (num > 5 && num < 10 && num % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

mayorYMenor(2); //FALSE
mayorYMenor(8); //TRUE
mayorYMenor(7); //FALSE
mayorYMenor(6); //TRUE


//operador || = or/o, basta solo con que una condicion sea verdadera para que la condicion final tambien lo sea.

function operadorOr(str){
    if (str === "Henry" || str.length < 2) {
        console.log(true);
    } else {
        console.log(false);
    }
}

operadorOr("Henry"); //TRUE
operadorOr("javascript"); //FALSE
operadorOr("A"); //TRUE


//operador ! = negacion.
//agregando el operador ! preguntamos lo contrario, entonces solo se imprime si es False.
//podemos preguntar si un valor es igual a otro y tambien podemos preguntar si son diferentes

function negacion(permiso){
    if(permiso !== true){
        console.log("Tiene permiso");
    }    
}

negacion(false); //Tiene permiso


function operacionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3){
        console.log(true);
    } else {
        console.log(false);
    }
}

operacionCompleja(10); //TRUE
operacionCompleja(6); //FALSE
operacionCompleja(3); //TRUE
operacionCompleja(5); //FALSE