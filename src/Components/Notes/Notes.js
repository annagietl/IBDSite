import React, { useState } from 'react';
import Nav from "../Nav/Nav";

const NotesPage = () => {
  const [notes, setNotes] = useState([
    // { title: "Note 1", body: "This is the body of Note 1" },
    // { title: "Note 2", body: "This is the body of Note 2" },
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

      <h1 id='notesh1'>Notes</h1>
      <h3 id='notesh3'>Enter your notes here</h3>
      <hr />

      {/* notes form */}
      <form onSubmit={handleSubmit} id='notesform'>
        <label htmlFor="noteTitle">Title: </label>
        <input type="text" name="noteTitle" value={noteTitle} onChange={handleTitleChange} />
        <br />
        <br />
        <label htmlFor="noteBody">Body: </label>
        <textarea name="noteBody" value={noteBody} onChange={handleBodyChange} />
        <br />
        <br />
        <br />
        <br />

        {/* button for notes submission */}
        <button type="submit">Add Note</button>
      </form>

      <hr /> 

      {/* mapping each note to a list item to be displayed on the page */}
      <ul>
        {notes.map((note, index) => (
          <li key={index} id='note'>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default NotesPage;
