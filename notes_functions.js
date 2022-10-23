const fs = require("fs");
// const ch = require("chalk");


//aa chalk valu thatu km nathi....
//const { default: chalk } = require("chalk");
// const { title } = require("process");

const addNote = function (title, body) {
  const listOfNotes = getListOfNotes();
  var duplicateNotes = 0;

  console.log(listOfNotes);
  listOfNotes.push({
    title: title,
    body: body,
  });

  listOfNotes.filter(function (note) {
    if (note.title == title) {
      // console.log("TITLE ALREADY TAKEN");
      // console.log("0 -" + duplicateNotes);
      duplicateNotes++;
      // console.log("1 -" + duplicateNotes);
    }
  });
  // console.log("2 -" + duplicateNotes);
  // saveNotes(listOfNotes);
  if (duplicateNotes == 1) {
    saveNotes(listOfNotes);
    chalk.red.inverse();
    console.log(chalk.green.inverse("NOTE ADDED"));
    // console.log("NOTE ADDED");
  } else {
    console.log(chalk.red.inverse("TITLE ALREADY TAKEN"));
    // console.log("TITLE ALREADY TAKEN");
  }
  //   if (duplicateNotes == 0) {
  //     saveNotes(listOfNotes);
  //     console.log("NOTE ADDED");
  //   } else {
  //     console.log("TITLE ALREADY TAKEN");
  //   }
};

const removeNote = function (title) {
  const listOfNotes = getListOfNotes();
  const newListOfNotes = [];
  listOfNotes.filter(function (note) {
    if (note.title !== title) {
      newListOfNotes.push(note);
    }
  });
  saveNotes(newListOfNotes);
};

const getListOfNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes-list.json");
    const dataString = dataBuffer.toString();
    const dataJSON = JSON.parse(dataString);
    return dataJSON;
  } catch (e) {
    return [];
  }
};

const saveNotes = function (listOfNotes) {
  console.log(listOfNotes);
  const dataString = JSON.stringify(listOfNotes);
  fs.writeFileSync("notes-list.json", dataString);
};

module.exports = {
  removeNote: removeNote,
  addNote: addNote,
  saveNotes: saveNotes,
  getListOfNotes: getListOfNotes,
};
