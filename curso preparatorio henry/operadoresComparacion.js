// Los operadores de comparacion son entre otros, los siguientes:
// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que
// == igual que
// != diferente que
// estos operadores devuelven un valor BOOLEANO = True or False.

console.log(4 > 3);
console.log(4 < 3);
console.log(10 == 10);
console.log(10 == 15);

// == igualdad (verifica si el valor es el mismo)
// === igualdad estricta (verifica que coincida el tipo de dato y el valor del mismo)
console.log(3 == 3);
console.log(3 == "3");
console.log(3 === 3);
console.log(3 === "3");

// Asociatividad
var a = 1;
var b = 2;
var c = (a = b);

console.log(a);
console.log(b);
console.log(c);