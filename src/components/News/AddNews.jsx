import { toast } from "react-toastify";
import { AddNews } from "../../API/NewsApi";

export const AddNewNews = () => {
  const addNewItem = (data) => {
    let title = data.get("title");
    let date = data.get("date");
    let text = data.get("text");
    let newNews = { title, text, date, id: 1 };
    console.log({ data, newNews });
    AddNews(newNews)
      .then((result) => {
        console.log(result);
        toast.success("Added news");
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <h1>Add News</h1>
      <form action={addNewItem}>
        <p>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="title"
            required
          />
        </p>
        <p>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="dd/mm/yyyyy"
            required
          />
        </p>
        <p>
          <textarea name="text" id="text" required />
        </p>
        <button type="submit">Add News</button>
      </form>
    </>
  );
};
