import { ToDo } from "../ToDo/ToDo";
import { LandOfEem } from "../LandOfEem/LandOfEem";
import { EnforcerNames } from "../Random/EnforcerNames";
import { Terminal } from "../Terminal/Terminal";
import { NoteList } from "../Notes/NoteList";
export const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <ToDo />
      <NoteList />
      {/* <Terminal />
      <EnforcerNames />
      <LandOfEem />

      /> */}
    </div>
  );
};
