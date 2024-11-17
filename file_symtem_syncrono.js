const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')
const text = fs.readFileSync('./archivo.txt','utf-8')
const text2 = fs.readFileSync('./archivo2.txt','utf-8')

console.log(
    stats.isFile(),
    text
)

console.log(
    text2
)