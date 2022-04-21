const express = require('express')
const router = express.Router()

//QueryString => query property on the request object
//localhost:5000/person?name=Auri&age=19
router.get('/person', (req, res) => {
    if (req.query.name) {
        res.send(`You have requested a person, parametro ${req.query.name}`)
    } else {
        res.send('You have requested a person, here you got budy')
    }
})

//Params property on the request object
//localhost:5000/person/Auri
router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person, parametro ${req.params.name}`)
})

router.get('/error', (req, res) => {
    throw new Error('This is a forced error')
})

module.exports = router