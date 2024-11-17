const fs = require('node:fs/promises')

console.log('1. leer el primer archivo')

fs.readFile('./archivo.txt','utf-8').then(text => {console.log('primer texto',text)})


console.log('----> realizo algo asincronico')

fs.readFile('./archivo2.txt','utf-8').then(text2 => {console.log('segundo texto',text2)})