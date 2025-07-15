import { useState, useEffect } from "react";
import { NewsCard } from "./NewsCard";
import { PuffLoader } from "react-spinners";
import { Loader } from "../Loaders";

export const NewsList = () => {
  const url = "http://localhost:3000";
  const [newsItems, setNewsItems] = useState(null);
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
  }, []);
  return (
    <div>
      <h1>News List</h1>
      {!newsItems && <Loader />}
      {newsItems && (
        <ul>
          {newsItems.map((item, i) => (
            <li key={i}>
              <NewsCard news={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
