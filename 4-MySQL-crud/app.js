const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'))

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
})