
// const add = require('./appone.js');

// //fajl.writeFileSync('notes.txt', ' Moje ime je Fedja! ');

// //fajl.appendFileSync('notes.txt'," Nesto nesto");

// const sum = add(4, -2)

// console.log(sum)


const chalk = require('chalk');

const log = console.log;

const yargs = require('yargs');

const notes = require('./notes.js')

//const poruka = chalk.cyan.bold(" Success! " +  chalk.red.underline.bold( " Joy and Happiness " ));
/*const getNotes = require('./notes.js');

const vali = require('validator')

const staIma = getNotes();

console.log(staIma);

console.log(vali.isURL('https://upwardnexus.com'))
*/

/*log(chalk.bgGreen.inverse(poruka));

console.log(process.argv[2]);*/
//console.log(process.argv);



yargs.version('1.1.0')


yargs.command({

	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true, 
			type: 'string',
		},
		 body: {
		 	describe: 'Body option',
		 	demandOption:true,
		 	type:'string',


		 }


	},
	handler: function(argv){
		notes.addNote(argv.title, argv.body)//METODA IZ NOTES.JS ZVANA ADDNOTE
	}


})



yargs.command({

	command: 'remove',
	describe: 'Remove a note',
	builder:{
		title:{

			describe:'Note title',
			demandOption: true,
			type: 'string',
		}
	},
	handler: function(argv){
		notes.removeNote(argv.title)

	}


})


yargs.command({

	command: 'list',
	describe: 'Listing the note',
	handler: function(){
		console.log("Listing the note!")

	}


})


yargs.command({

	command: 'read',
	describe: 'Reading the note',
	handler:function(){
		console.log("Reading the note!")
	}


})





console.log(yargs.argv);
//const command = process.argv[2];

/*if( command === 'add') {
	console.log('Adding note!');



}
else if(command === 'remove'){
 console.log('Removing note!')

}*/