const express = require('express') //iniciamos un objeto para utilizar express

const app = express() //Creamos una "app"

const personRoute = require('./routes/person') //Importamos la ruta de person.js

app.use(personRoute) //Registramos la ruta
app.use(express.static('public'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('The server is on the port: '+ PORT)
})