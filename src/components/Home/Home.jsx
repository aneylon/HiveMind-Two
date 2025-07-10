import { NewsCard } from "../News/NewsCard";
import { About } from "../About/About";
import { FAQ } from "../FAQ/FAQ";
import { Tools } from "../Tools/Tools";
import { NewsList } from "../News/NewsList";
import { SignOut } from "../Auth/SignOut";
import { SignIn } from "../Auth/SignIn";
import { SignUp } from "../Auth/SignUp";
import { NoteList } from "../Notes/NoteList";
export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <NoteList />
      {/* <SignUp />
      <NewsList />
      <Tools />
      <SignIn />
      <SignOut />
      <About />
      <FAQ /> */}
    </>
  );
};
