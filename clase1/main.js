/*let nombre1 = "Francisco"
var nombre2 = "Pepe"

nombre1 = null
var nombre2 = "Pepito"

var nombre3 = "Ana"

const edad = 40

const IVA = 1.21

function sumar1(num1, num2) {
    let resultado = num1 + num2
    const IVA_ESPECIAL = 1.30
    console.log(IVA_ESPECIAL)
    return `Sumar desde funcion normal ${resultado}`
}

const sumar2 = (num1, num2) => `Sumar desde funcion flecha ${num1 + num2}`


console.log(sumar1(50, 20))
console.log(IVA)*/

class Pokemon {
    constructor(nombre, vidas, nivel, estadisticas) {
        this.nombre = nombre
        this.vidas = vidas
        this.nivel = nivel
        this.estadisticas = estadisticas
    }

    desplazarse(velocidad) {
        console.log(`Me estoy desplazando a ${velocidad} km/h`)
    }

}

//extends = quiero que esta clase extienda de la clase Pokemon (ser una clase hija)
//superclase = clase padre
class Electrico extends Pokemon {
    constructor(nombre, vidas, nivel, estadisticas, dañoImpactrueno) {
        super(nombre, vidas, nivel, estadisticas)
        this.dañoImpactrueno = dañoImpactrueno
    }

    impactrueno() {
        console.log(`${this.nombre} lanzo impactrueno con un daño de ${this.dañoImpactrueno}`)
    }
}

class Fuego extends Pokemon {
    constructor(nombre, vidas, nivel, estadisticas, dañoLlamarada) {
        super(nombre, vidas, nivel, estadisticas)
        this.dañoLlamarada = dañoLlamarada
    }

    llamarada() {
        console.log(`${this.nombre} lanzo llamarada con un daño de ${this.dañoLlamarada}`)
    }
}

const pikachu1 = new Electrico("Pika pika", 10, 1, {}, 5)
const charmander1 = new Fuego("Fueguito", 12, 2, { descripcion: "un capo" }, 6)

console.log(pikachu1)
console.log(charmander1)

pikachu1.impactrueno()
charmander1.llamarada()
pikachu1.desplazarse(20)
charmander1.desplazarse(10)