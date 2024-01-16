import crypto from 'crypto'

console.log(crypto.randomBytes(10).toString('hex'))
class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(producto) {
        //VALIDAR QUE TODOS LOS DATOS SE HAYAN INGRESADO
        //const indice = this.products.findIndex(prod = prod.code === producto.code)
        const existe = this.products.includes(prod => prod.code === producto.code)

        //EXISTE este producto en el array
        if (existe) {
            return "Producto ya existente"
        } else {
            producto.id = crypto.randomBytes().toString('hex')
            this.products.push(producto)
        }
    }
}