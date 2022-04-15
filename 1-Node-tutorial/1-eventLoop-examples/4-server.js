const http = require('http')

const server = http.createServer((req, red) => {
    console.log('request event')
    red.end('Hello dad')
})

server.listen(5000, () => {
    console.log('Server listening on port: 5000')
})