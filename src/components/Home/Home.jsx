import { NewsList } from "../News/NewsList";
import { SignOut } from "../Auth/SignOut";
import { SignIn } from "../Auth/SignIn";
import { SignUp } from "../Auth/SignUp";
export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <NewsList />
      {/* <SignUp />
      <SignIn />
      <SignOut /> */}
    </>
  );
};
