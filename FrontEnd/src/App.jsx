import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home/Home";
import RedirectPage from "./RedirectPage/RedirectPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:shortcode" element={<RedirectPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
