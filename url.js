
const url = "https://www.example.com:8080/products/mobile?id=101&brand=apple#reviews"
console.log(url)

const apiUrl = new URL(url)
console.log(apiUrl)

console.log(apiUrl.searchParams.get('brand'))

apiUrl.searchParams.set('brand', 'samsung')
console.log(apiUrl.searchParams.get('brand'))

console.log(url)
console.log(apiUrl.href)

const queryParams = new URLSearchParams({name:'ram', age:24})
console.log(queryParams, queryParams.toString())


