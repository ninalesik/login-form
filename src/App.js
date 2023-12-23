import React from "react";
import { Login } from "./components/Login";
import { Header } from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="inner">
      <Header />
      <Login />
    </div>
  );
}

export default App;
