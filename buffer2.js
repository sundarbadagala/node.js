const fs = require('fs')

const data= fs.readFileSync('hello.txt')
console.log(data)

const data2 = fs.readFileSync('hello.txt', 'utf-8')
console.log(data2)