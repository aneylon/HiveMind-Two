import { ToDo } from "../ToDo/ToDo";
import { NewsCard } from "../News/NewsCard";
export const Home = () => {
  return (
    <>
      <h1>Home</h1>;
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
