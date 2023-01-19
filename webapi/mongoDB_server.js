const mongoose = require('mongoose')

const mongoDB = async () => {
    const conn = await mongoose.connect(process.env.mongodbURI) // process eller progress??
    console.log(`MongoDB is running at ${conn.connection.host}`)
}

module.exports = mongoDB