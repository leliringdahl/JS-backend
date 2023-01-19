require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')
const mongoDB = require('./mongoDB_server')
const app = express()


//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true }))



const products_Controller = require('./controllers/products_Controller')
app.use('/api/products', products_Controller)

mongoDB()
app.listen(PORT, () => console.log(`WebApi is running on http://localhost:${PORT}`))