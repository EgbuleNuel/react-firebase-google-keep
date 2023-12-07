import React, { useState } from "react";
import DisplayNote from "./DisplayNote";
import Form from "./Form";

const Note = () => {
  const [notes, setNotes] = useState([]);
  const createNote = (note) => {
    console.log(note);
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  return (
    <div className="container">
      <Form onCreate={createNote} />
      <div className="note-container">
        {notes &&
          notes.map((note) => (
            <DisplayNote title={note.title} content={note.content} />
          ))}
      </div>
    </div>
  );
};

export default Note;
