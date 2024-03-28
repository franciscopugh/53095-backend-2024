import { Router } from "express";
import cartModel from "../models/cart.js";

const cartRouter = Router()

cartRouter.post('/', async (req, res) => {
    try {
        const mensaje = await cartModel.create({ products: [] })
        res.status(201).send(mensaje)
    } catch (e) {
        res.status(500).send(`Error interno del servidor al crear carrito: ${error}`)
    }
})

cartRouter.get('/:cid', async (req, res) => {
    try {
        const cartId = req.params.cid
        const cart = await cartModel.findOne({ _id: cartId })
        res.status(200).send(cart)
    } catch (error) {
        res.status(500).send(`Error interno del servidor al consultar carrito: ${error}`)
    }
})

cartRouter.post('/:cid/:pid', async (req, res) => {
    try {
        const cartId = req.params.cid
        const productId = req.params.pid
        const { quantity } = req.body
        const cart = await cartModel.findById(cartId)

        const indice = cart.products.findIndex(product => product.id_prod == productId)

        if (indice != -1) {
            //Consultar Stock para ver cantidades
            cart.products[indice].quantity = quantity //5 + 5 = 10, asigno 10 a quantity
        } else {
            cart.products.push({ id_prod: productId, quantity: quantity })
        }
        const mensaje = await cartModel.findByIdAndUpdate(cartId, cart)
        res.status(200).send(mensaje)
    } catch (error) {
        res.status(500).send(`Error interno del servidor al crear producto: ${error}`)
    }
})

export default cartRouter