import { ToDo } from "../ToDo/ToDo";
import { Note } from "../Notes/Note";
import { LandOfEem } from "../LandOfEem/LandOfEem";
import { EnforcerNames } from "../Random/EnforcerNames";

export const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <ToDo />
      <EnforcerNames />
      <Note
        note={{
          id: 3,
          text: "stuff",
          title: "Make Note",
          save: (id, note) => console.log({ id, note }),
        }}
      />
      <LandOfEem />
    </div>
  );
};
