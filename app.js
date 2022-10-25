const notesFunc = require("./notes_functions");
// const { argv } = require("yargs");
const yargs = require("yargs");
// const { demandOption } = require("yargs");

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
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    notesFunc.addNote(argv.title, argv.body);
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
  builder: {
    title: {
      describe: "Title of Note",
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    notesFunc.removeNote(argv.title);
  },
});

//Create LIST command

yargs.command({
  command: "list",
  describe: "list command.....",
  handler() {
    console.log("List Of Notes\n");
    notesFunc.notesList();
  },
});

//Create READ command

yargs.command({
  command: "read",
  describe: "Reading Note.....",
  builder: {
    title: {
      describe: "Reading The Note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notesFunc.readNote(argv.title);
  },
});

yargs.parse();
// console.log(yargs.option);
