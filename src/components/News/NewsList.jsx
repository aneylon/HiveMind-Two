import { useState, useEffect } from "react";
import { NewsCard } from "./NewsCard";
import { Loader } from "../Loaders";
import { GetNews } from "../../API/NewsApi";

export const NewsList = () => {
  const [newsItems, setNewsItems] = useState(null);
  useEffect(() => {
    GetNews()
      .then((news) => setNewsItems(news))
      .catch((error) => console.error);
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
