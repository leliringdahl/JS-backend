const express = require('express')
const controller = express.Router()
const product_Schema = require ('../schemas/product_Schema')

/* jag kan hämta, skapa, radera och uppdatera alla objekt via postman men dem skickas inte vidare till den grafiska webAppen.  */

controller.route('/').get (async (req,res) => {

    try {
        const products = await product_Schema.find()
        res.status(200).json(products)
    } catch {
        res.status(404).json()
    }
})

controller.route('/product/details/:articleNumber').get (async (req,res) => {

    const product = await product_Schema.findById(req.params.articleNumber)
        if(product)
            res.status(200).json({
                articleNumber:product._id,
                name: product.name,
                price: product.price,
                rating: product.rating,
                category: product.category,
                description: product.description,
                tag: product.tag,
                imageName: product.imageName
            })
            
        else
            res.status(404).json()
    
}) 

/* hade först liknande denna strukturen men iom att jag haft problem testade jag det du hade gjort men tror som sagt inte att det är orsaken till problemet iom att det inte har hjälpt att byta.

controller.route('/:tag').get (async (req,res) => {
    const products = await product_Schema.find({tag: req.params.tag})
        if(products)
            res.status(200).json(products)
        else
        res.status(404).json()
}) */

controller.route('/:tag').get (async (req,res) => {
    const products = []
    const list = await product_Schema.find({tag: req.params.tag})
        if(list) {
            for(let products of list) {
                products.push ({
                articleNumber:product._id,
                name: product.name,
                price: product.price,
                rating: product.rating,
                category: product.category,
                description: product.description,
                tag: product.tag,
                imageName: product.imageName
                })
            }
            res.status(200).json(products)
    } else
            res.status(404).json()
})

controller.route('/:tag/:take').get (async (req,res) => {
    const products = []
    const list = await product_Schema.find({tag: req.params.tag}).limit(req.params.take)
        if(list) {
            for(let products of list) {
                products.push ({
                articleNumber:product._id,
                name: product.name,
                price: product.price,
                rating: product.rating,
                category: product.category,
                description: product.description,
                tag: product.tag,
                imageName: product.imageName
                })
            }
            res.status(200).json(products)
    } else
            res.status(404).json()
})




controller.route('/').post(async (req, res) => {
    const {name, description, price, rating, category, tag, imageName} = req.body

    if (!name || !price)
        res.status(400).json({text: 'name and price is required.'})

    const duplicate = await product_Schema.findOne({name})
        if (duplicate)
        res.status(409).json({text: 'a product with this name already exists.'})
    else {
        const product = await product_Schema.create({
            name,
            category,
            tag,
            description,
            price,
            rating,
            imageName
        })
        if(product)
            res.status(201).json({text:`'${product.name}' added successfully`})
        else
            res.status(400).json({text: 'something went wrong'})
    }

})

controller.route('/:articleNumber').delete(async (req, res) => {
    if(!req.params.articleNumber)
        res.status(400).json({text:'article number is required'})

    const item = await product_Schema.findById(req.params.articleNumber)
    if (item) {
        await product_Schema.remove(item)
        res.status(200).json(`product with article number ${req.params.articleNumber} was removed succesfully.`)
    } else
        res.status(404).json({text: `product with article number ${req.params.articleNumber} was not found.`})
})


controller.route('/:articleNumber').put(async (req, res) => {    
    if(!req.params.articleNumber)
        res.status(400).json({text:'article number is required'})

    const item = await product_Schema.findByIdAndUpdate(req.params.articleNumber, req.body, {new:true})
    if (item) { 
             res.status(200).json({text:`product with article number ${req.params.articleNumber} was updated successfully.`})
    } else
        res.status(404).json({text: `product with article number ${req.params.articleNumber} was not found.`})
})






/*

controller.param("tag", (req,res,next, tag) => {
    req.products = products.filter(x => x.tag == tag)
    next()
})

controller.param("articleNumber", (req,res,next, articleNumber) => {
    req.products = products.filter(x => x.articleNumber == articleNumber)
    next()
})

*/





module.exports = controller
