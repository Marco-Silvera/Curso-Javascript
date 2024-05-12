/* 1) Realizar una función que almacene en un arreglo todos los números pares desde a hasta b. */

function almacenar(a, b) {
    let pares = [];
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    return pares;
}

console.log(almacenar(1, 100));



/* 2) Realizar una tabla de multiplicación de una número (a) desde 0 hasta x, pero que no se muestre la multiplicación de a * 5. */

function multiplicacion(a, x) {
    let tabla = []
    for (let i = 0; i <= x; i++) {
        if (i != 5) {
            tabla.push(a * i)
        }
        console.log(`La multiplicación de ${a} * ${i} = ` + tabla[i])
    }
    return tabla;
}

console.log(multiplicacion(3, 10))



/* 3) Hacer una función que filtre todos los números que sean multiplos de 3 de un arreglo que contenga los números del 1 al 100. */

function filtrar() {
    let numeros = []
    let filtrados = []
    for (let i = 0; i <= 100; i++) {
        numeros.push(i)
        if (numeros[i] % 3 === 0) {
            filtrados.push(i)
        }
    }
    return filtrados
}

console.log(filtrar())



/* 4) Hacer una función que haga de forma aleatoria un número entre 1 y 1000, y que a ese número le saque su mitad, el doble y su raíz cuadrada. */

function operaciones() {
    let numero = Math.floor(Math.random() * (1000 - 1) + 1)
    console.log(`Número: ${numero}`)
    console.log(`Mitad: ${numero / 2}`)
    console.log(`Doble: ${numero * 2}`)
    console.log(`Raíz: ${numero ** 0.5}`)
}

operaciones()



/* 5) Hacer una función que, dado como dato de entrada nuestra fecha de cumpleaños, bis diga cuantos días faltan para el mismo. */

function cumpleaños(a = "11 nov 2022") {
    let cumple = new Date(a)
    let hoy = new Date()
    let diasRestantes = Math.floor((cumple.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
    console.log(diasRestantes);
    console.log(cumple, hoy);
}

cumpleaños("01 jun 2024")



/* 6) Realizar una función que, dado como dato de entrada una oración, nos devuelva un arreglo que contenga todas las palabras usadas en la oración. */

function separar(text = "Hola mundo") {
    let words = text.split(" ")
    console.log(words)
}

separar()
separar("Un texto basico como ejemplo del ejercicio")



/* 7) Crea 5 objetos y almacenalos en un arreglo, debes hacer una función para filtrar a todas las personas que tengan el nombre Luis y que esa misma función también muestre cuales son mayores de edad. */

function filtrar() {

    const personas = [
        {
            nombre: "david",
            edad: 20,
        },
        {
            nombre: "luis",
            edad: 21,
        },
        {
            nombre: "javier",
            edad: 17,
        },
        {
            nombre: "luis",
            edad: 23,
        },
        {
            nombre: "marco",
            edad: 23,
        }
    ]

    console.log(personas);
    let luises = personas.filter((el) => {
        if (el.nombre == "luis") console.log(`${el.nombre} - ${el.edad}`)
    })
    let mayores = personas.filter((el) => {
        if (el.edad >= 18) console.log(`${el.nombre} es Mayor de edad ${el.edad}`)
    })

}

filtrar()



/* 8) Realizar una función que nos diga la fecha de apertura de un examen de la universidad, es decir, la cantidad de horas restantes que faltan para que abra un examen. En caso de que el examen haya cerrado que nos retorne un mensaje que diga "El examen ya cerró". */

function apertura(open = "", close = "") {
    if (open === "" || close === "") return console.error("Faltan parametros");
    else {
        let today = new Date(), testOpen = new Date(open), testClose = new Date(close);
        let resultTimeOpen = Math.floor((testClose.getTime() - testOpen.getTime()) / (1000 * 60));
        let resultTimeRest = Math.floor((testOpen.getTime() - today.getTime()) / (1000 * 60));
        console.log(resultTimeOpen, resultTimeRest)

        if (testClose.getTime() < today.getTime()) return console.log("El examen finalizó");
        else {
            if (resultTimeRest > 0) console.log(`Faltan ${resultTimeRest} minutos para que el examen abra`);
            else {
                console.log("El examen está abierto")
                console.log(`El examen durará abierto ${resultTimeOpen} minutos`)
            }
        }
    }
}

apertura("Sat may 11 2024 20:00:00", "Sat may 11 2024 23:00:00")



/* 9) En un arreglo tenemos varios valores numericos, debemos de hacer una funcion que nos elimine aquellos valores que se encuentran repetidos. */

function eliminarRepetidos() {
    const nums = [1, 2, 3, 4, 5, 6, 4, 2, 1]
    let result = nums.filter((item, index) => {
        return nums.indexOf(item) === index
    })

    let newNums = new Set(nums);
    let result2 = [...newNums]
    console.log(result2)
    console.log(`Arreglo original: ${nums} , arreglo filtrado: ${result}`)
}

eliminarRepetidos()