import { useState } from "react";
import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <>
      {/* header */}
      <Header />
      {/* side bar */}
      <SideBar />
      {/* main section */}
      <Home />
    </>
  );
}

export default App;
