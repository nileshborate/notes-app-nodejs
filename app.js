const validator = require("validator")
const chalk = require("chalk")
const yargs = require("yargs")
const getNotes = require("./notes")

//console.log("Arguments = ",yargs.argv);
yargs.version('1.1.0')

//create add command
yargs.command({
    command : 'add',
    describe : 'Add a New Note',
    handler : function (){
        console.log("Adding a new note");
    }
})

//create remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a Note',
    handler : function (){
        console.log("Removing the note");
    }
})

//create list of Notes
yargs.command({
    command : 'list',
    describe : 'List Your Notes',
    handler : function (){
        console.log("List out all note");
    }
})


//create Read Note
yargs.command({
    command : 'read',
    describe : 'Read a Note',
    handler : function (){
        console.log("Reading a note");
    }
})

console.log(yargs.argv);


