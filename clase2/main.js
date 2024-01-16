/*
//ECMA 7
let numero = 5 ** 3 //Math.pow(5,3)

//ECMA 8

fetch('https://criptoya.com/api/dolar')
    .then(response => response.json())
    .then(data => console.log(data))

const consultarDolar = async () => {
    const response = await fetch('https://criptoya.com/api/dolar')
    const data = await response.json()
    return data
}

consultarDolar().then(datos => {
    console.log(Object.keys(datos)) //Clave
    console.log(Object.values(datos)) //Valor
    console.log(Object.entries(datos)) //Clave-Valor
})

fetch('https://criptoya.com/api/dolar')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => console.log("Saludos!."))

const obj2 = {}
const obj1 = { ...obj2 }

const sumar = (...numeros) => { //n numeros
    return numeros.reduce((num1, num2) => num1 / num2, 0)
}

const suma = sumar(5, 10, 50, 20, 10, 20, 40, 15, 20, 20, 10, 50)

console.log(suma)

//ECMA 10

const nombre = " Francisco "
console.log(nombre.trim()) //Elimino tanto por derecha como por izquierda
console.log(nombre.trimEnd()) //Elimino por derecha
console.log(nombre.trimStart()) //Elimino por izquierda


const sueldosEmpresa = [5000, 4000, [2000, 6000], [1500, [3000, [4000]]]]

const sumarSueldos = (sueldos) => { //n numeros
    return sueldos.reduce((num1, num2) => num1 + num2, 0)
}

console.log(sumarSueldos(sueldosEmpresa.flat(3)))*/

//ECMA 11

const user = { nombre: "Pepe", sueldo: undefined }
console.log(user.sueldo + 20000)

const suma = user.sueldo ?? 0

const carrito = localStorage.getItem('carrito') ?? []
carrito.push()