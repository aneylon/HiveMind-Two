import { useEffect, useState } from "react";
import { NewsCard } from "../News/NewsCard";
import { About } from "../About/About";
import { FAQ } from "../FAQ/FAQ";
import { Tools } from "../Tools/Tools";
export const Home = () => {
  const url = "http://localhost:3000";

  const [newItems, setNewsItems] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(url + "/news")
      .then((data) => {
        return data.json();
      })
      .then((news) => {
        console.log({ news });
        setNewsItems(news);
      })
      .catch((error) => {
        console.error(error);
      });

    fetch(`${url}/note`)
      .then((data) => data.json())
      .then((notes) => {
        console.log({ notes });
        setNotes(notes);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Home</h1>
      <NewsCard
        news={{
          title: "New update",
          date: new Date().toUTCString(),
          info: "Added a news card component",
        }}
      />
      <Tools />
      <About />
      <FAQ />
    </>
  );
};
