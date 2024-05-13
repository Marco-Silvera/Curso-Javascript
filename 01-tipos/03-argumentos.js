function suma(a, b) { // a y b son PARAMETOS
    console.log(arguments); // Para ver todos los argumentos
    return a + b;
}

let resultado = suma(5, 6); // 5 y 6 son ARGUMENTOS
console.log(resultado);