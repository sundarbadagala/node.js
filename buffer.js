
const bufferText = Buffer.from('helloo')
console.log(bufferText)
console.log(bufferText.toString())

console.log('------------------------------------')

const fixedBuffer = Buffer.alloc(5)
console.log(fixedBuffer)
fixedBuffer.write('hi')
console.log(fixedBuffer)
console.log(fixedBuffer.toString())

console.log('------------------------------------')

const fixedBuffer2 = Buffer.alloc(5)
console.log(fixedBuffer2)
fixedBuffer2.write('helloworld')
console.log(fixedBuffer2)
console.log(fixedBuffer2.toString())

console.log('------------------------------------')

const chunks = [Buffer.from('hi'), Buffer.from('hello'), Buffer.from('world')]
console.log(chunks)
const combineChunks = Buffer.concat(chunks)
console.log(combineChunks)
console.log(combineChunks.toString())

console.log('------------------------------------')

const fixedBuffer3 = Buffer.allocUnsafe(4)
console.log(fixedBuffer3)
fixedBuffer3.write('hiiii')
console.log(fixedBuffer3)