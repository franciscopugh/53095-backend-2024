/*
    Proceso de encription

    Algoritmo de encription
    key o clave
    Iv o vector inicial

*/

import crypto from 'crypto'

//console.log(crypto.getCiphers())

const algoritmo = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)


const encriptar = (password) => {
    const cipher = crypto.createCipheriv(algoritmo, Buffer.from(key), iv)
    cipher.update(password) //Generar contraseña
    let encriptar = cipher.final() //Guardame el contenido de la encriptacion
    return encriptar.toString('hex')
}

const desencriptar = (passwordEncriptada) => {
    console.log(passwordEncriptada)
    const pass = Buffer.from(passwordEncriptada, 'hex')
    const decipher = crypto.createDecipheriv(algoritmo, Buffer.from(key), iv)
    decipher.update(pass)
    let desencriptar = decipher.final()
    return desencriptar.toString()
}

const password = encriptar('Hola Mundo!')
console.log(desencriptar(password))