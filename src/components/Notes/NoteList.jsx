import { useEffect, useState } from "react";
import { Loader } from "../Loaders";
import { Note } from "./Note";
import { GetNotes, UpdateNote } from "../../API/NotesApi";

export const NoteList = () => {
  const [notes, setNotes] = useState(null);
  const getNotes = () => {
    GetNotes()
      .then((notes) => setNotes(notes))
      .catch((error) => console.error(error));
  };
  const updateNote = (note) => {
    UpdateNote(note)
      .then((res) => getNotes())
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
