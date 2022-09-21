import React from "react";
import Resume from "./components/Resume";
import Backend from "./components/Backend";
import Search from "./components/frontend/Search";
import Translate from "./components/frontend/Translate";
import Route from "./components/header/Route";
import Header from "./components/header/Header";
import CSSCheatSheet from "./components/frontend/CSSCheatSheet.js";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <Resume />
      </Route>
      <Route path="/wiki-search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/css-cheat-sheet">
        <CSSCheatSheet />
      </Route>
      <Route path="/dota-api">
        <Backend />
      </Route>
      <Route path="/coding-challenges">
        <Backend label="Examples of backend work I've done" />
      </Route>
    </div>
  );
};

export default App;
