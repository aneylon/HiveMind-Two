import { useState } from "react";

export const Note = ({ note }) => {
  const [noteText, setNoteText] = useState(note.text);
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div>
      <h1>{note.title}</h1>
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
              note.save(note.id, noteText);
            }}
          >
            save
          </button>
        </div>
      )}
    </div>
  );
};
