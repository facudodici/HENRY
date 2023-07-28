function cuidadoConElConsoleLog(nombre){
    console.log(nombre);
    return(nombre);
}

function otraFuncion() {
    return (
        "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " +
        cuidadoConElConsoleLog('Aldana')
    );
}

function cuidadoConElReturn(nombre) {
    return nombre;
    console.log('Aldana');
}

//funciones son bloques de codigo que podemos ejecutar y nos retornaran algun valor.
//si no definimos un valor a retornar, por defecto js nos retornara undefined.
//los parametros son palabras claves que nos permiten introducir informacion externa a una funcion.
//podemos introducir varios parametros
//todo lo que se encuentre despues del return no se ejecutara.
//console.log se usa solo para ayudarnos a la hora de programar