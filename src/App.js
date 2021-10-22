import React from "react";
import "./App.css";
import Albums from "./components/Albums";
import News from "./components/News";

function App() {
  return (
    <div className="container">
      <Albums />
      <News></News>
    </div>
  );
}

export default App;
