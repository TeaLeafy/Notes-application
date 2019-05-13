const fs = require('fs')

const chalk = require('chalk');

const getNotes = function(){

	return 'Your notes...'


}



const removeNote = function (title){
	const noter = loadNotes()
	const checker = noter.filter(function(note){
		return noter.title != title

	})

	if(noter.length > checker.length){
		console.log(chalk.bgGreen('Note removed!'))
		saveNotes(checker)

	}
	else 
	{
			console.log(chalk.bgRed('No note found!'))
	}

}

const addNote = function (title, body){ 
//FUNKCIJA ODGOVORNA ZA DODAVANJE NOTOVA
	const notes = loadNotes()
	const duplicateNotes = notes.filter(function (note){
		return note.title === title
	})

	if (duplicateNotes.length === 0){
		notes.push({

		title: title,
		body: body

	})

	console.log('New note add')

	saveNotes(notes)

	}else{

		console.log("Note title taken!")
	}
	
	
}


const saveNotes = function (notes){
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = function (){


	try{
	const dataBuffer = fs.readFileSync('notes.json')
	const dataJSON = dataBuffer.toString()
	return JSON.parse(dataJSON)

	} catch(e){
		return []

	}


}


module.exports = {
//OVAKO MOZE DA SE EKSPORTUJE VISE OD JEDNE STVARI
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote


}




/*const fs = require('fs');

const getNotes = function (){

const spisak = fs.writeFileSync( 'notesOne.txt', " De si prika? ");
const citanje = fs.readFileSync('notesOne.txt' , 'utf8');
console.log(citanje);
}

module.exports= getNotes*/