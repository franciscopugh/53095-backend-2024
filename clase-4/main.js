/*
import fs from 'fs'
const RUTA = './ejemplo.txt'
//SINCRONICO
//Similar al metodo SOME
if (fs.existsSync(RUTA)) {
    //Leer contenido
    let contenido = fs.readFileSync(RUTA, 'utf-8')
    console.log(contenido)
    //Agregar nuevo contenido
    fs.appendFileSync(RUTA, `
        Hola. \n
        Buenas. \n
        Noches. \n`
    )

    fs.writeFileSync(RUTA, "") //reemplazar contenido
    //fs.unlinkSync(RUTA) //Eliminar txt

} else {
    fs.writeFileSync(RUTA, "")
}
//CALLBACKS

fs.writeFile(RUTA, "Hola \n", (error) => {
    if (error) {
        return "Error al escribir en archivo"
    }

    fs.readFile(RUTA, 'utf-8', (error) => {
        if (error) {
            return "Error al leer archivo"
        }

        fs.appendFile(RUTA, "Buenas noches. \n", (error) => {
            if (error) {
                return "Error al modificar archivo"
            }

            fs.unlink(RUTA, (error) => {
                if (error) {
                    return "Error al eliminar archivo"
                }

                return "Ruta completada"
            })
        })
    })
})

//Dando un alias
import { promises as fs } from 'fs'

const operarTxt = async () => {
    await fs.writeFile(RUTA, "")

    let contenido = await fs.readFile(RUTA, 'utf-8')
    console.log(contenido)

    await fs.appendFile(RUTA, `
             Hola. \n
             Buenas. \n
             Noches. \n`
    )

    await fs.unlink(RUTA) //Eliminar txt

}

operarTxt()*/


import { promises as fs } from 'fs'
import crypto from 'crypto'
const RUTA = './productos.json'

const producto = {
    id: crypto.randomBytes(10).toString('hex'),
    nombre: "Queso",
    precio: 1450,
    cant: 4
}
console.log(producto)

const cargarProductoBDD = async (producto) => {
    let productos = JSON.parse(await fs.readFile(RUTA, 'utf-8'))
    const indice = productos.findIndex((prod) => prod.id == producto.id)
    if (indice != -1) {
        productos[indice].cant += producto.cant //prod.cant += producto.cant
    } else {
        productos.push(producto)
    }

    await fs.writeFile(RUTA, JSON.stringify(productos))
}


cargarProductoBDD(producto)