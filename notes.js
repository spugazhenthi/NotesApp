const fs = require('fs')
const chalk = require('chalk');

const addNotes = (title ,body) =>
{
   const notesData = loadNotes();
   const duplicateNotes = notesData.find((note) => note.title === title)
if(!duplicateNotes)
{
   notesData.push({
       title:title,
       body:body
   })
   saveNotes(notesData);
   console.log(chalk.green.inverse('Added note'));
}
else
{
    console.log(chalk.red.inverse('Note taken'));
}
};

const removeNote = (title) => {
   const notesData = loadNotes();
   const notesToKeep = notesData.filter((note) => note.title !== title)

   if(notesData.length > notesToKeep.length)
   {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse('Note is removed'))
   }
   else
   {
    console.log(chalk.red.inverse("No Note found!"));
   }
}

const listNotes = () =>{
    const notesData = loadNotes();
    console.log(chalk.inverse('Your Notes'))
    notesData.forEach(element => {
        console.log(chalk.inverse(element.title))
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const matchingnote = notes.find((note)=> note.title === title)
    if(!matchingnote)
    {
        console.log(chalk.red('No Note found!'))
    }
    else
    {
        console.log(chalk.inverse(matchingnote.title) + matchingnote.body)
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    console.log(dataJson);
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes = () => {
    try {
        const dataBuffer =  fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString());
    }
    catch (e) {
        return [];
    }
};

module.exports = {
    addNote : addNotes,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}