const validator = require("validator")
const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./notes")

//console.log("Arguments = ",yargs.argv);
yargs.version('1.1.0')

//create add command
yargs.command({
    command : 'add',
    describe : 'Add a New Note',
    builder:{
        title:{
            type:"string",
            demandOption:true,
            describe:"Note Title"
        },
        body:{
            type:"string",
            demandOption:true,
            describe:"Note Body"
        }
    },
    handler : function (argv){
        //console.log("Title :",argv.title);
        //console.log("Body :",argv.body);
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a Note',
    builder:{
        title:{
            type:"string",
            demandOption:true,
            describe:"Note Title"
        }
    },
    handler : function (argv){
        notes.removeNote(argv.title)
        //console.log("Removing the note");
    }
})

//create list of Notes
yargs.command({
    command : 'list',
    describe : 'List Your Notes',
    handler : function (){
        notes.listNotes()
    }
})


//create Read Note
yargs.command({
    command : 'read',
    describe : 'Read a Note',
    builder:{
        title:{
            type:"string",
            demandOption:true,
            describe:"Note Title"
        }
    },
    handler : function (argv){
        //console.log("Reading a note");
        notes.readNote(argv.title)
    }
})

console.log(yargs.argv);


