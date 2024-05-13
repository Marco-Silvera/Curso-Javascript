// short-circuit

/*
Falso - falsy
- false
- 0
- ''
- null
- undefined
-NaN
*/

let nombre = '';
let username = nombre || 'anonimo'; // Or - || muestra el primero valor verdadero 
console.log(username); // devuelve anonimo

function fn1() {
    console.log('Soy funcion 1');
    return true;
}

function fn2() {
    console.log('Soy funcion 2');
    return true;
}

let x = fn1() && fn2();

