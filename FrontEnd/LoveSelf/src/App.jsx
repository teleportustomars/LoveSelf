// import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import { Outlet } from "react-router-dom"
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="App soft">
        <Nav />
        <div className="pageContent">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
