/*import http from 'http'
//req = request = peticion
//res = response = respuesta
//Puertos: 0-1023 son reservados para el sistema (NO SE PUEDEN UTILIZAR). El 3389 es el de escritorio remoto

const app = http.createServer((req, res) => {
    res.end("Hola, este es mi primer mensaje desde el servidor")
})

app.listen(8000, () => {
    console.log("Server on port 8000")
})*/

import express from 'express'
import { ProductManager } from './config/ProductManager.js'
const app = express()
const PORT = 8000
const productManager = new ProductManager('./src/data/products.json')

app.get('/', (req, res) => {
    res.send("Hola, desde mi primer servidor en Express")
})

app.get('/products', async (req, res) => {
    const { limit } = req.query

    const prods = await productManager.getProducts()
    const limite = parseInt(limit)
    if (limite) { //Si es un string no numerico, me devuelve NaN. Un NaN en un if es falso
        if (limite < 0) {
            res.send("Ingrese un numero valido para los queries")
        } else {
            const prodsLimit = prods.slice(0, limit)
            res.send(prodsLimit)
        }

    } else {
        res.send("Ingrese un valor valido en los Queries")
    }


})

//: significa que es modificable (puede ser un 4 como un 10 como un 75)
app.get('/products/:pid', async (req, res) => {
    const idProducto = req.params.pid //Todo dato que se consulta desde un parametro es un string
    const prod = await productManager.getProductById(idProducto)
    res.send(prod)
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})