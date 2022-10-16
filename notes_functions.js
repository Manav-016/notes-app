const fs = require("fs");
// const { title } = require("process");

const addNote = function (title, body) {
  const listOfNotes = getListOfNotes();

  const duplicateNotes = listOfNotes.filter(function (note) {
    return note.title == title;
  });
  if (duplicateNotes.length() === 0) {
    saveNotes(listOfNotes, title, body);
  }
};

const getListOfNotes = function () {
  try {
    dataString = fs.readFileSync("notesList.json");
    dataJSON = JSON.parse(dataString);

    return dataJSON;
  } catch {
    return [];
  }
};

const saveNotes = function (listOfNotes, title, body) {
  listOfNotes.push({
    title: title,
    body: body,
  });

  fs.writeFileSync("app-json.json", listOfNotes);
  console.log("NOTE ADDED");
};

export { addNote, saveNotes, getListOfNotes };
