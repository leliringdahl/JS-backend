const mongoose = require('mongoose')

const product_Schema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String},
    category: {type: String},
    tag: {type: String},
    rating: {type: Number},
    imageName: {type: String}
})

module.exports = mongoose.model("products", product_Schema) 


