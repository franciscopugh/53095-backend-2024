import { Schema, model } from "mongoose";

const userSchema = new Schema({
    nombre: String,
    apellido: String,
    password: String,
    edad: Number,
    email: {
        type: String,
        unique: true
    }
})

export const userModel = model("users", userSchema)