/*let nombre1 = "Francisco"
let nombre2 = nombre1
nombre2 = "Pepe"

console.log(nombre1)
console.log(nombre2)
*/
let user1 = { nombre: "Fernanda", apellido: "Fernandez" }
let user2 = { ...user1 }
user2.nombre = "Francisca"

console.log(user1)
console.log(user2)