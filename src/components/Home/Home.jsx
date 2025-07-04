import { useEffect, useState } from "react";
import { NewsCard } from "../News/NewsCard";
import { About } from "../About/About";
import { FAQ } from "../FAQ/FAQ";
import { Tools } from "../Tools/Tools";
import { NewsList } from "../News/NewsList";
import { SignOut } from "../Auth/SignOut";
import { SignIn } from "../Auth/SignIn";
import { SignUp } from "../Auth/SignUp";
export const Home = () => {
  const url = "http://localhost:3000";

  const [notes, setNotes] = useState([]);

  useEffect(() => {
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
      <SignUp />
      <SignIn />
      <SignOut />
      <NewsList />
      <Tools />
      <About />
      <FAQ />
    </>
  );
};
