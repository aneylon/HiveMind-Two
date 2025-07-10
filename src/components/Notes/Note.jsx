import { useState } from "react";

export const Note = ({ note, save }) => {
  const [noteText, setNoteText] = useState(note.info);
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div>
      <h1>{note.title}</h1>
      <h3>{note.date}</h3>
      {!showEdit && (
        <div>
          <p onClick={() => setShowEdit(true)}>{noteText}</p>
        </div>
      )}
      {showEdit && (
        <div>
          <div>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              setShowEdit(false);
              let date = new Date();
              let dateParts = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
              save({ ...note, info: noteText, date: dateParts });
            }}
          >
            save
          </button>
        </div>
      )}
    </div>
  );
};
