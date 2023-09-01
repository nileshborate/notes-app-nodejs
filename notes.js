const fs = require("fs")
const chalk = require("chalk")

const getNotes = () => {
    console.log("notes call");
}

const addNote = (title,body) => {
    const notes = loadNotes()
    //console.log(notes);

    const duplicateNotes = notes.filter((note) => note.title == title)

    if(duplicateNotes.length == 0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)    
        console.log("New Note Added");
    }else{
        console.log("Note Title Already Taken");
    }
}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)    
    }catch(e){
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title != title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.reverse("Note Removed"));
        saveNotes(notesToKeep)    
    }else{
        console.log(chalk.red.inverse("Note Not Found"));
    }
}

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach((note)=>{
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()

    const noteFound= notes.find((note) => note.title == title)

    if(noteFound){
        console.log(noteFound.title);
        console.log(noteFound.body);
    }else{
        console.log(chalk.red.inverse("Note Not Found"));
    }
}
module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes:listNotes,
    readNote:readNote
}