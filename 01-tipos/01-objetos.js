// Tipo de REFERENCIA (NO son primitivos)
// Cuando son almacenados en la ram del pc, guarda la dirección a donde eventualmente se encontrara guardado el objeto


// Par llave-valor
let personaje = {
    nombre: "Crow",
    juego: "Brawl Stars",
    edad: 16,
};

console.log(personaje);
console.log(personaje.edad);
console.log(personaje["juego"]);



// Editar valor

// Método 1
personaje.edad = 20;
console.log(personaje.edad);

// Método 2
personaje["edad"] = 23;
console.log(personaje["edad"]);



// Eliminar propiedad

delete personaje.edad;
console.log(personaje);