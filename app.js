// const chalk = require("chalk");
const fs = require("fs");
const { addNote, saveNote, getListOfNotes } = require({
  addNote,
  saveNote,
  getListOfNotes,
});
// const { argv } = require("yargs");
const yargs = require("yargs");

//Create ADD command

yargs.command({
  command: "add",
  describe: "Adding Note.....",
  builder: {
    title: {
      describe: "Still NOthing",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "Still NOthing",
      demandOption: true,
    },
  },
  handler: function (argv) {
    addNote(argv.title, argv.body);
    // const dataBuffer = fs.readFileSync("app-json.json");
    // const dataString = dataBuffer.toString();
    // const dataJSON = JSON.parse(dataString);

    // dataJSON.title = argv.title;
    // dataJSON.body = argv.body;

    // const newDataString = JSON.stringify(data);

    // fs.writeFileSync("app-json.json", newDataString);
    // console.log("NOTE ADDED", argv);
  },
});

//Create REMOVE command

yargs.command({
  command: "remove",
  describe: "removing Note.....",
  handler: function () {
    console.log("NOTE REMOVED");
  },
});

//Create LIST command

yargs.command({
  command: "list",
  describe: "list command.....",
  handler: function () {
    console.log("SETTING UP LIST COMMAND OUTPUT");
  },
});

//Create READ command

yargs.command({
  command: "read",
  describe: "Reading Note.....",
  handler: function () {
    console.log("READING CONTENT");
  },
});

yargs.parse();
// console.log(yargs.option);
