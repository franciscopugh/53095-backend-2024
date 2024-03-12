import express from 'express'
import mongoose from 'mongoose'
import orderModel from './models/order.js'
import { __dirname } from './path.js'

//Configuraciones o declaraciones
const app = express()
const PORT = 8000

//Server
const server = app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})


//Connection DB
mongoose.connect("mongodb+srv://franciscopugh01:@cluster0.uggkmbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() =>
        console.log("DB is connected")
    )
    .catch(e => console.log(e))

const resultado = await orderModel.paginate({ status: true }, { limit: 10, page: 1, sort: ({ price: 'desc' }) })
console.log(resultado)

/*const resultado = await orderModel.aggregate([
    {
        $match: { size: "small" }
    },
    {
        $group: { _id: "$name", totalQuantity: { $sum: "$quantity" }, totalPrice: { $sum: "$price" } }
    },
    {
        $sort: { totalPrice: -1 } // 1 menor a mayor, -1 de mayor a menor
    },
    {
        $group: { _id: 1, orders: { $push: "$$ROOT" } }
    },
    {
        $project: {
            "_id": 0,
            orders: "$orders"
        }
    },
    {
        $merge: {
            into: "reports"
        }
    }


])

console.log(resultado)

await orderModel.insertMany([
    { name: "Napolitana", size: "small", price: 8000, quantity: 4 },
    { name: "4 quesos", size: "small", price: 12000, quantity: 4 },
    { name: "4 quesos", size: "medium", price: 14000, quantity: 2 },
    { name: "4 quesos", size: "large", price: 18000, quantity: 2 },
    { name: "4 quesos", size: "medium", price: 7000, quantity: 1 },
    { name: "Calabresa", size: "small", price: 5000, quantity: 2 },
    { name: "Calabresa", size: "medium", price: 8000, quantity: 2 },
    { name: "Calabresa", size: "large", price: 9000, quantity: 2 },
    { name: "Calabresa", size: "large", price: 4500, quantity: 1 },
    { name: "Napolitana", size: "medium", price: 10000, quantity: 2 },
    { name: "Napolitana", size: "large", price: 14000, quantity: 2 },
    { name: "Napolitana", size: "small", price: 6000, quantity: 3 },
    { name: "Vegetariana", size: "small", price: 3000, quantity: 2 },
    { name: "Vegetariana", size: "medium", price: 6000, quantity: 3 },
    { name: "Vegetariana", size: "medium", price: 8000, quantity: 4 },
    { name: "Vegetariana", size: "large", price: 3500, quantity: 1 },
    { name: "Jamon y morrones", size: "small", price: 5000, quantity: 2 },
    { name: "Jamon y morrones", size: "large", price: 8000, quantity: 2 },
    { name: "Jamon y morrones", size: "medium", price: 6000, quantity: 2 },
    { name: "Jamon y morrones", size: "small", price: 7500, quantity: 3 },
    { name: "Napolitana", size: "medium", price: 15000, quantity: 3 }
])


//Middlewares
app.use(express.json())

*/