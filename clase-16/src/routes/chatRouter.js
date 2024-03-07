import { Router } from "express";

const chatRouter = Router()

chatRouter.get('/', (req, res) => {
    res.render("templates/chat", {})
})

export default chatRouter