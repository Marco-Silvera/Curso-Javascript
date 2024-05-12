/*
La diferencia entre var y let,
*/

var edad = 20 // El valor de edad es 20
function calcularEdad() {
    edad = 10 // El valor de edad pasa a ser 10
    console.log("La edad es ", edad)
}

edad = 30

calcularEdad()
console.log(edad)



let edad2 = 20 // El valor de edad es 20
function calcularEdad() {
    // edad2 = 10 <- Esto dara error ya que en la función edad2 no existe
    let edad2 = 10 // El valor de edad pasa a ser 10
    console.log("La edad es ", edad2)
}

edad2 = 30 // El valor pasa a ser 30

calcularEdad() // Imprime 10
console.log(edad2) // Imprime 30