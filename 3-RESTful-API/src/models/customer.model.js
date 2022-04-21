const mongoose = require('mongoose')

const server = 'ds221609.mlab.com:12609'
const database = 'rest-api-workshop'
const user = 'PlayerOneV'
const password = 'lkjflsi10987zxoe'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)