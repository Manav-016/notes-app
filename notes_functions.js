const fs = require("fs");
// const ch = require("chalk");

//aa chalk valu thatu km nathi??
// const { default: chalk } = require("chalk");
// const { title } = require("process");

const addNote = (title, body) => {
  const listOfNotes = getListOfNotes();
  const duplicateNote = listOfNotes.find(function (note) {
    return note.title == title;
    // console.log("TITLE ALREADY TAKEN");
    // console.log("0 -" + duplicateNotes);

    // console.log("1 -" + duplicateNotes);
  });

  console.log(listOfNotes);
  listOfNotes.push({
    title: title,
    body: body,
  });

  // console.log("2 -" + duplicateNotes);
  // saveNotes(listOfNotes);
  if (!duplicateNote) {
    saveNotes(listOfNotes);
    // console.log(chalk.green.inverse("NOTE ADDED"));
    console.log("NOTE ADDED");
  } else {
    // console.log(chalk.red.inverse("TITLE ALREADY TAKEN"));
    console.log("TITLE ALREADY TAKEN");
  }
  //   if (duplicateNotes == 0) {
  //     saveNotes(listOfNotes);
  //     console.log("NOTE ADDED");
  //   } else {
  //     console.log("TITLE ALREADY TAKEN");
  //   }
};

const removeNote = (title) => {
  const listOfNotes = getListOfNotes();
  const found = listOfNotes.find((note) => note.title == title);

  console.log(found);

  if (found == undefined) {
    console.log("NOTE NOT FOUND");
  } else {
    const newListOfNotes = listOfNotes.filter((note) => {
      return note.title !== title;
    });
    saveNotes(newListOfNotes);
    console.log("NOTE REMOVED");
  }
};

const notesList = () => {
  const listOfNotes = getListOfNotes();

  listOfNotes.forEach((note) => {
    console.log("-" + note.title);
  });
};

//nichenu ne uparnu bei sarkha j 6 toi aa valu no chailu!
// const readNote = (title) => {
//   const listOfNotes = getListOfNotes();
//   const expectedNote = listOfNotes.find((note) => {
//     console.log(typeof note.title + " " + typeof title);
//     note.title == title;
//   });
//   console.log(
//     listOfNotes.find((note) => {
//       console.log(typeof note.title + " " + typeof title);
//       note.title == title;
//     })
//   );

//   if (expectedNote == undefined) {
//     console.log("Note Not Found To Read");
//   } else {
// console.log("TITLE: " + expectedNote.title);
// console.log("CONTENT: " + expectedNote.body);
//   }
// };

const readNote = (title) => {
  const listOfNotes = getListOfNotes();
  const expectedNote = listOfNotes.find((note) => note.title == title);

  // console.log(expectedNote);

  if (expectedNote == undefined) {
    console.log("NOTE NOT FOUND");
  } else {
    console.log("Note " + title + " is as Follows: ");
    console.log("TITLE: " + expectedNote.title);
    console.log("CONTENT: " + expectedNote.body);
  }
};

const getListOfNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes-list.json");
    const dataString = dataBuffer.toString();
    const dataJSON = JSON.parse(dataString);
    return dataJSON;
  } catch (e) {
    return [];
  }
};

const saveNotes = (listOfNotes) => {
  console.log(listOfNotes);
  const dataString = JSON.stringify(listOfNotes);
  fs.writeFileSync("notes-list.json", dataString);
};

module.exports = {
  removeNote: removeNote,
  addNote: addNote,
  notesList: notesList,
  readNote: readNote,
  saveNotes: saveNotes,
  getListOfNotes: getListOfNotes,
};
