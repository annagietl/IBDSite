import React, { useState } from 'react';
import Nav from "../Nav/Nav";

const NotesPage = () => {
  const [notes, setNotes] = useState([
    { title: "Note 1", body: "This is the body of Note 1" },
    { title: "Note 2", body: "This is the body of Note 2" },
  ]);

  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setNoteBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = { title: noteTitle, body: noteBody };
    setNotes([...notes, newNote]);
    setNoteTitle("");
    setNoteBody("");
  };

  return (
    <div>
      <Nav />
      <h1>Notes</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="noteTitle">Title:</label>
        <input type="text" name="noteTitle" value={noteTitle} onChange={handleTitleChange} />
        <br />
        <label htmlFor="noteBody">Body:</label>
        <textarea name="noteBody" value={noteBody} onChange={handleBodyChange} />
        <br />
        <button type="submit">Add Note</button>
      </form>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPage;
