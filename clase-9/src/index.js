import express from 'express'
import cartRouter from './routes/cartRouter.js'
import productsRouter from './routes/productsRouter.js'
import upload from './config/multer.js'
import { engine } from 'express-handlebars'
import { __dirname } from './path.js'

//Configuraciones o declaraciones
const app = express()
const PORT = 8000

//Middlewares
app.use(express.json())
app.use('/static', express.static(__dirname + '/public'))
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')

//Routes
app.use('/api/products', productsRouter)
app.use('/api/cart', cartRouter)
app.post('/upload', upload.single('product'), (req, res) => {
    try {
        console.log(req.file)
        res.status(200).send("Imagen cargada correctamente")
    } catch (e) {
        res.status(500).send("Error al cargar imagen")
    }
})
app.get('/static', (req, res) => {

    const prods = [
        { id: 1, title: "Celular", price: 1500, img: "./img/170718249838066585_7797470128152.jpg" },
        { id: 2, title: "Televisor", price: 1800, img: "https://www.radiosapienza.com.ar/Image/0/500_500-526469_1.jpg" },
        { id: 3, title: "Tablet", price: 1200, img: "https://www.radiosapienza.com.ar/Image/0/500_500-526469_1.jpg" },
        { id: 4, title: "Notebook", price: 1900, img: "https://www.radiosapienza.com.ar/Image/0/500_500-526469_1.jpg" }
    ]

    res.render('templates/products', {
        mostrarProductos: true,
        productos: prods,
        css: 'product.css'
    })
})

//Server
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})