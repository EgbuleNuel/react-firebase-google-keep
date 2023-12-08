import React, { useState, useEffect } from "react";
import DisplayNote from "./DisplayNote";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [addNote, setAddNote] = useState({ title: "", content: "" });
  const [id, setId] = useState("");

  const noteRef = collection(db, "note");

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(noteRef);
      console.log(data);
      setNotes(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };

    getNotes();
  }, [noteRef]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddNote({ ...addNote, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(addNote);
    await addDoc(noteRef, addNote);
  };

  const deleteNote = async (id) => {
    const deletenote = doc(noteRef, id);
    await deleteDoc(deletenote);
  };

  const updateNote = async (note) => {
    // console.log(note);
    setAddNote({ title: note.title, content: note.content });
    setId(note.id);
  };

  const updatedNote = async (id) => {
    console.log(id);
    const updatenote = doc(db, "note", id);
    await updateDoc(updatenote, addNote);
  };

  return (
    <div className="container">
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title..."
          onChange={handleChange}
          value={addNote.title}
        />
        <textarea
          name="content"
          rows="1"
          placeholder="Type Note Here..."
          onChange={handleChange}
          value={addNote.content}
          required
        ></textarea>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <button type="submit">Submit</button>
            <button
              style={{ marginLeft: "10px" }}
              type="button"
              onClick={() => updatedNote(id)}
            >
              Update
            </button>
          </div>
        </div>
      </form>
      <div className="note-container">
        {notes &&
          notes.map((note) => (
            <DisplayNote
              title={note.title}
              content={note.content}
              id={note.id}
              getId={deleteNote}
              getUpdateNoteID={updateNote}
            />
          ))}
      </div>
    </div>
  );
};

export default Note;
