import { ToDo } from "../ToDo/ToDo";
import { Note } from "../Notes/Note";
import { LandOfEem } from "../LandOfEem/LandOfEem";
import { EnforcerNames } from "../Random/EnforcerNames";
import { Terminal } from "../Terminal/Terminal";

export const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <ToDo />
      {/* <Terminal />
      <EnforcerNames />
      <LandOfEem />
      /> */}
    </div>
  );
};
