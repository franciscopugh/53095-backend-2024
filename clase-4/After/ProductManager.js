import { promises as fs } from 'fs'

export class ProductManager {
    constructor(path) {
        this.path = path //./products.json
    }

    async getProducts() {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        console.log(prods)
    }

    async getProductById(id) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const prod = prods.find(producto => producto.id === id)
        if (prod)
            console.log(prod)
        else
            console.log('Producto no existe')
    }

    async addProduct(newProduct) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        if (newProduct.code && newProduct.id && newProduct.title && newProduct.description && newProduct.price && newProduct.thumbnail && newProduct.code && newProduct.stock) {
            const indice = prods.findIndex(prod => prod.code === newProduct.code)
            console.log(indice)
            if (indice === -1) {
                prods.push(newProduct)
                console.log(prods)
                await fs.writeFile(this.path, JSON.stringify(prods))
                console.log('Producto creado correctamente')
            } else {
                console.log('Producto ya existe en este array')
            }
        } else {
            console.log('Debe ingresar un producto con todas las propiedades')
        }
    }

    async updateProduct(id, nuevoProducto) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const indice = prods.findIndex(producto => producto.id === id)
        if (indice != -1) {
            prods[indice].stock = nuevoProducto.stock
            prods[indice].price = nuevoProducto.price
            prods[indice].title = nuevoProducto.title
            prods[indice].thumbnail = nuevoProducto.thumbnail
            prods[indice].description = nuevoProducto.description
            prods[indice].code = nuevoProducto.code
            await fs.writeFile(this.path, JSON.stringify(prods))
            console.log('Producto actualizado correctamente')
        } else {
            console.log('Producto no existe')
        }

    }

    async deleteProduct(id) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const indice = prods.findIndex(producto => producto.id === id)
        if (indice != -1) {
            const prodsFiltrados = prods.filter(prod => prod.id != id)
            await fs.writeFile(this.path, JSON.stringify(prodsFiltrados))
            console.log('Producto eliminado correctamente')
        } else {
            console.log('Producto no existe')
        }

    }


}