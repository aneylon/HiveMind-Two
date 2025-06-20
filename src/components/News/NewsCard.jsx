export const NewsCard = ({ news }) => {
  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.date}</p>
      <p>{news.info}</p>
    </div>
  );
};
