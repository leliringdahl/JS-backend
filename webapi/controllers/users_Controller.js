const express = require('express')
const controller = express.Router()

/*

controller.param("id", (req,res,next) => {
    req.user = users.find(user => user.id == id)
    next()
})

controller.post('/', (req,res) => {
    let user = {
        id:(users[users.length -1])?.id > 0 ? (users[users.length -1])?.id + 1:1,
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment
    }
        users.push(user)
        res.status(201).json(users)
})


controller.get('/', (req,res) => {
    res.status(200).json(users)
})



controller.route("/:id")
.get((req,res) => {
    if (req.user != undefined)
        res.status(200).json(req.user)
    else 
        res.status(404).json()
})
.put((req,res) => {
    if (req.user != undefined) {
        user.foreach(user => {
            if (user.id == req.user.id) {
                user.name = req.body.name ? req.body.name : user.name
                user.email = req.body.email ? req.body.email : user.email
                user.comment = req.body.comment ? req.body.comment : user.comment
            }
        })
        res.status(200).json(req.user)
    }
    else
        res.status(404).json()
})

.delete((req,res) => {
    if (req.user != undefined) {
        users = users.filter(user => user.id !== req.user.id)
        res.status(204).json()
    }
    else res.status(404).json()
})



*/



module.exports = controller 
