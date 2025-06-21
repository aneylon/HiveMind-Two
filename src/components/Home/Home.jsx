import { ToDo } from "../ToDo/ToDo";
import { NewsCard } from "../News/NewsCard";
import { Note } from "../Notes/Note";
export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Note
        note={{
          id: 3,
          text: "stuff",
          title: "Make Note",
          save: (id, note) => console.log({ id, note }),
        }}
      />
      <ToDo />
      <NewsCard
        news={{
          title: "New update",
          date: new Date().toUTCString(),
          info: "Added a news card component",
        }}
      />
    </>
  );
};
