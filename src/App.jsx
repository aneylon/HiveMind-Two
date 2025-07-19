import { useState } from "react";
import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { Home } from "./components/Home/Home";
import { Outlet, Route, Routes } from "react-router";
import { About } from "./components/About/About";
import { FAQ } from "./components/FAQ/FAQ";
import { Tools } from "./components/Tools/Tools";
import { NotFound } from "./components/NotFound/FourOhFour";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="tools" element={<Tools />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Outlet />
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
