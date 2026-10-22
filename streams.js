const {Readable, Transform, Writable} = require('stream')
const {pipeline} = require('stream/promises')

const readableStream = Readable.from(['hi', 'hello', 'world', 'from', 'node.js'])

const uppercaseTransform = new Transform({
	transform(chunk, encoding, callback){
		const text = chunk.toString()
		callback(null, text.toUpperCase())
	}
})

const writableStream = new Writable({
	write(chunk, encoding, callback){
		console.log('recived chunk', chunk.toString())
		callback()
	}
})

const main=async()=>{
	try{
		await pipeline(readableStream, uppercaseTransform, writableStream)
		console.log('stream completed')
	}catch(err){
		console.log(err)
	}
}

main()