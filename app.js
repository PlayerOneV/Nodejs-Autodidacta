
const http = require('http')

const server = http.createServer((req, red) => {
    console.log('request event')
    red.end('Hello dad')
})

server.listen(5000, () => {
    console.log('Server listening on port: 5000')
})
/*
npm -> global command, comes with node
npm --version

local dependency -> use it only in this particular project
npm i <namepackage>

global dependency -> use it in any project
npm install -g <packageName>
sudo npm install -g <packageName> (mac)

package.json -> manifest file (stores important info about project/package)
manual approach (create package.json in the root, create propierties etc)
npm init (step by step, press enter to skip)
npm init -y (everything default)
*/