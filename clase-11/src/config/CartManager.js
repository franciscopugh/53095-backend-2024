import { promises as fs } from 'fs'

export class CartManager {
    constructor(path) {
        this.products = path
    }

    async getCart() {
        const cart = JSON.parse(await fs.readFile(this.products, 'utf-8'))
        return cart
    }

    async addProductByCart(idProducto, quantityParam) {
        const cart = JSON.parse(await fs.readFile(this.products, 'utf-8'))

        const indice = cart.findIndex(product => product.id == idProducto)

        if (indice != -1) {
            cart[indice].quantity += quantityParam //5 + 5 = 10, asigno 10 a quantity
        } else {
            const prod = { id: idProducto, quantity: quantityParam }
            cart.push(prod)
        }
        await fs.writeFile(this.products, JSON.stringify(cart))
        return "Producto cargado correctamente"
    }

}