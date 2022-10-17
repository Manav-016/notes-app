const fs = require("fs");
// const { title } = require("process");

const addNote = function (title, body) {
  const listOfNotes = getListOfNotes();

  console.log(listOfNotes);
  listOfNotes.push({
    title: title,
    body: body,
  });
  const duplicateNotes = listOfNotes.filter(function (note) {
    return note.title == title;
  });
  if (duplicateNotes === 0) {
    saveNotes(listOfNotes);
    console.log("NOTE ADDED");
  } else {
    console.log("TITLE ALREADY TAKEN");
  }
  //   saveNotes(listOfNotes);
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
