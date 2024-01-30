import { promises as fs } from 'fs'

export class ProductManager {
    constructor(path) {
        this.path = path //./products.json
    }

    async getProducts() {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        return prods
    }

    async getProductById(id) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const prod = prods.find(producto => producto.id === id)
        if (prod)
            return prod
        else
            return 'Producto no existe'
    }

    async addProduct(newProduct) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        if (newProduct.code && newProduct.id && newProduct.title && newProduct.description && newProduct.price && newProduct.thumbnail && newProduct.code && newProduct.stock) {
            const indice = prods.findIndex(prod => prod.code === newProduct.code)
            if (indice === -1) {
                prods.push(newProduct)
                await fs.writeFile(this.path, JSON.stringify(prods))
                return 'Producto creado correctamente'
            } else {
                return 'Producto ya existe en este array'
            }
        } else {
            return 'Debe ingresar un producto con todas las propiedades'
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
            return 'Producto actualizado correctamente'
        } else {
            return 'Producto no existe'
        }

    }

    async deleteProduct(id) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const indice = prods.findIndex(producto => producto.id === id)
        if (indice != -1) {
            const prodsFiltrados = prods.filter(prod => prod.id != id)
            await fs.writeFile(this.path, JSON.stringify(prodsFiltrados))
            return 'Producto eliminado correctamente'
        } else {
            return 'Producto no existe'
        }

    }


}