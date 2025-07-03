export const NewsCard = ({ news }) => {
  return (
    <div>
      <h3>{news.title}</h3>
      <p>{news.date}</p>
      <p>{news.text}</p>
    </div>
  );
};
