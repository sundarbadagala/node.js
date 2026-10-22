const path = require('path')

//path
//join
//resolve
//basename
//dirname
//extname


const rootDir = process.cwd()
console.log('rootDir', rootDir)

const join = path.join(__dirname, 'files', 'text.txt')
console.log("join", join)

const resolve = path.resolve(__dirname, 'files', 'text.txt')
console.log("resolve", resolve)

const basename = path.basename(__dirname)
console.log("basename", basename)

const dirname = path.dirname(__dirname)
console.log("dirname", dirname)

const extname = path.extname(__dirname)
console.log("extname", extname)
