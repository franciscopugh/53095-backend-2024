import express from 'express'
import { PrismaClient } from './prisma/generated/client/index.js'

const app = express()
const prisma = new PrismaClient()
const PORT = 3000

app.use(express.json())

app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send(`Error al consultar usuarios: ${e}`)
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) }
        })
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(`Error al consultar usuario: ${e}`)
    }
})

app.post('/users', async (req, res) => {
    try {
        const { id, name, email, password } = req.body
        console.log(name, email, password)
        const rta = await prisma.user.create({
            data: { id, name, email, password }
        })
        res.status(200).send(rta)
    } catch (e) {
        res.status(500).send(`Error al crear usuario: ${e}`)
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, password } = req.body
        const rta = await prisma.user.update({
            where: { id: parseInt(id) },
            data: { name, email, password }
        })
        res.status(200).send(rta)
    } catch (e) {
        res.status(500).send(`Error al actualizar usuario: ${e}`)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const rta = await prisma.user.delete({
            where: { id: parseInt(id) }
        })
        res.status(200).send(rta)
    } catch (e) {
        res.status(500).send(`Error al eliminar usuario: ${e}`)
    }
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})