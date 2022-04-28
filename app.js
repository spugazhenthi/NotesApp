const notesUtility = require('./notes.js')
const chalk = require('chalk')
const yarks = require('yargs')

// console.log(process.argv);

// customize yorks version
yarks.version('1.1.1')

// create command to add
yarks.command({
    command:'add',
    description:'Add a new Note',
    builder:{
        title:{
            describe:'This is Title',
            demandOption:true,
            type:'string'
        },        
        body:{
            describe:'This is to add title body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        console.log('Adding a new Note ' + argv.title)
        console.log('Body of the Title '+argv.body)
        notesUtility.addNote(argv.title,argv.body);
    }
})

// create remove command
yarks.command({
    command:'remove',
    description:'Removing the Note',
    builder : {
        title : {
            describe : 'Title to be removed',
            type : 'string',
            demandOption:true
        }
    },
    handler(argv){
        notesUtility.removeNote(argv.title);
    }
})

yarks.command({
    command:'list',
    description:'List the Note',
    handler() {
        notesUtility.listNotes()
    }
})

yarks.command({
    command:'read',
    description:'Reading the Note',
    builder : {
           title:{
               describe : 'Title to be read',
               demandOption : true,
               type : 'string'
           }
    },
    handler(argv){
        notesUtility.readNote(argv.title)
    }
})

yarks.parse()

// console.log(yarks.argv)

// if(command === 'add')
// {
//     // store into data store.
//     console.log('Adding Note!')
// }
// else if(command === 'remove')
// {
//     console.log('Removing Note !')
// }
