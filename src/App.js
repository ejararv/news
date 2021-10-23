import React from "react";
import "./App.css";
import Albums from "./components/Albums";
import News from "./components/News";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./UI/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/albums">
          <Albums />
        </Route>
        <Redirect to="/news" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
