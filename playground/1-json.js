const fs = require('fs')

/*const book = {

	title: "How to win friends",
	author: "Dale Carnegie"

}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

//const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)*/

/*const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer.toString);
const dataJSON = dataBuffer.toString()
const data =JSON.parse(dataJSON)
console.log(data.title)*/

const ja = {

	name:'Fedja',
	planet:'Earth',
	age: 25

}
const book = JSON.stringify(ja);
const dzej = fs.readFileSync('1-json.json', 'utf8');
const menjaza = fs.writeFileSync('1-json.json', book);
