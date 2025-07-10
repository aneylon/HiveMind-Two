import { useEffect, useState } from "react";
import { Loader } from "../Loaders";
import { Note } from "./Note";

export const NoteList = () => {
  const url = "http://localhost:3000";

  const [notes, setNotes] = useState(null);
  const getNotes = () => {
    fetch(`${url}/note`)
      .then((data) => data.json())
      .then((notes) => {
        setNotes(notes);
      })
      .catch((error) => console.error(error));
  };
  const updateNote = (note) => {
    fetch(`${url}/note/${note.id}`, {
      method: "PUT",
      body: JSON.stringify(note),
    })
      .then((res) => {
        if (res.ok === true) {
          getNotes();
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div>
      <h1>Note List</h1>
      {!notes && <Loader />}
      {notes && (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <Note note={note} save={updateNote} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
