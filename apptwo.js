const fs = require('fs');

const citanje = fs.readFileSync('notes.txt' , 'utf8');

console.log(citanje);