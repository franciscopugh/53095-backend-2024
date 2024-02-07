import { Router } from "express";
import { CartManager } from "../config/CartManager.js";
const cartManager = new CartManager('./src/data/cart.json')

const cartRouter = Router()

cartRouter.get('/', async (req, res) => {
    try {
        const cart = await cartManager.getCart()
        res.status(200).send(cart)
    } catch (error) {
        res.status(500).send(`Error interno del servidor al consultar carrito: ${error}`)
    }
})

cartRouter.post('/:pid', async (req, res) => {
    try {
        const productId = req.params.pid
        const { quantity } = req.body
        const mensaje = await cartManager.addProductByCart(productId, quantity)
        res.status(200).send(mensaje)
    } catch (error) {
        res.status(500).send(`Error interno del servidor al crear producto: ${error}`)
    }
})

export default cartRouter