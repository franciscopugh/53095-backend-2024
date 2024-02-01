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

//Permite poder ejecutar JSON
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hola, desde mi primer servidor en Express")
})

app.get('/products', async (req, res) => {
    try {
        const { limit } = req.query
        const prods = await productManager.getProducts()
        let limite = parseInt(limit)
        if (!limite)
            limite = prods.length
        console.log(limite)
        const prodsLimit = prods.slice(0, limite)
        res.status(200).send(prodsLimit)

    } catch (error) {
        res.status(500).send(`Error interno del servidor al consultar productos: ${error}`)
    }
})

//: significa que es modificable (puede ser un 4 como un 10 como un 75)
app.get('/products/:pid', async (req, res) => {
    try {
        const idProducto = req.params.pid //Todo dato que se consulta desde un parametro es un string
        const prod = await productManager.getProductById(idProducto)
        if (prod)
            res.status(200).send(prod)
        else
            res.status(404).send("Producto no existe")
    } catch (error) {
        res.status(500).send(`Error interno del servidor al consultar producto: ${error}`)
    }
})

app.post('/products', async (req, res) => {
    try {
        const product = req.body
        console.log(product)
        const mensaje = await productManager.addProduct(product)
        if (mensaje == "Producto creado correctamente")
            res.status(200).send(mensaje)
        else
            res.status(400).send(mensaje)
    } catch (error) {
        res.status(500).send(`Error interno del servidor al crear producto: ${error}`)
    }
})

app.put('/products/:pid', async (req, res) => {
    try {
        const idProducto = req.params.pid
        const updateProduct = req.body
        const mensaje = await productManager.updateProduct(idProducto, updateProduct)
        if (mensaje == "Producto actualizado correctamente")
            res.status(200).send(mensaje)
        else
            res.status(404).send(mensaje)
    } catch (error) {
        res.status(500).send(`Error interno del servidor al actualizar producto: ${error}`)
    }
})

app.delete('/products/:pid', async (req, res) => {
    try {
        const idProducto = req.params.pid
        const mensaje = await productManager.deleteProduct(idProducto)
        if (mensaje == "Producto eliminado correctamente")
            res.status(200).send(mensaje)
        else
            res.status(404).send(mensaje)
    } catch (error) {
        res.status(500).send(`Error interno del servidor al eliminar producto: ${error}`)
    }
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})