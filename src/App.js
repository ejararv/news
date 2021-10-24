import React from "react";
import "./App.css";
import Albums from "./components/Albums";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./UI/Navbar/Navbar";
import DetailPage from "./pages/DetailPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/news">
          <NewsPage />
        </Route>
        <Route path="/albums">
          <Albums />
        </Route>
        <Route exact path="/news/:id">
          <DetailPage />
        </Route>
        <Redirect to="/news" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
