import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    thumbnail: {
        default: []
    }
})

const productModel = model("products", productSchema)

export default productModel

