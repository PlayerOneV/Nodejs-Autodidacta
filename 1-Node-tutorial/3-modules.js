//Modules -> Encapsulated Code (only share minimum)
//CommonJS -> Every file is module (by default)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternativeFlavor')

require('./7-mind-granade')

console.log(data)

sayHi('Paulo');
sayHi(names.auri);
sayHi(names.frodo);