const crypto = require('node:crypto')

// security related tasks
// creating random uuids, uids
// creating secure tokens
// hashing data
// to verify data is not changed
// encrypt or decrypt



const id = crypto.randomUUID();
console.log(id);

// password reset token
// email verification
// session secret/ api keys

//32 chars
const resetToken = crypto.randomBytes(16).toString('hex')

console.log(resetToken)

//fixed length string

const text = 'hello'
const hash = crypto.createHash('sha256').update(text).digest('hex')

console.log(hash)

//createhmac
//webhook related
// signed tokens
const secreteKey = 'key123'
const message = 'hello'
const signature = crypto.createHmac('sha256', secreteKey).update(message).digest('hex')
console.log(signature)

const signatureVerify = crypto.createHmac('sha256', secreteKey).update(message).digest('hex')
console.log(signatureVerify === signature)