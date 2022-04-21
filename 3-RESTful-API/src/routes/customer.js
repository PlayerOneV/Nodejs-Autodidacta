let CustomerSchema = require('../models/customer.model')
let express = require('express')
const customerModel = require('../models/customer.model')
const router = express.Router()

//Create a new customer POST localhost:5000/customer
router.post('/customer', (req, res) => {
    // req.body
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }

    // let user = {
    //     name:'nombre apellido',
    //     email:'email@gmail.com'
    // }


    let model = new customerModel(req.body)

    model.save().then(doc => {
        if (!doc || doc.lenght === 0) {
            return res.status(500).send(doc)
        } else {
            res.status(201).send(doc)
        }
    }).catch(err => {
        res.status(500).json(err)
    })
})

//GET
router.get('/customer', (req, res) => {
    if (!req.query.email) {
        return res.status(400).send('Missing URL parameter: email')
    }

    customerModel.findOne({
        email: req.query.email
    }).then(doc => {
        res.json(doc)
    }).catch(err => {
        res.status(500).json(err)
    })
})

//UPDATE
router.put('/customer', (req, res) => {
    if (!req.query.email) {
        return res.status(400).send('Missing URL parameter: email')
    }

    customerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, { new:true }).then(doc => {
        res.json(doc)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.delete('customer', (req, res) => {
    if (!req.query.email) {
        return res.status(400).send('Missing URL parameter: email')
    }
    customerModel.findOneAndRemove({
        email: req.query.email
    }).then(doc => {
        res.json(doc)
    }).catch(err => {
        res.status(500).json(err)
    })
})
module.exports = router