import React from "react";
import Resume from "./components/Resume";
import Backend from "./components/Backend";
import Fullstack from "./components/Fullstack";
import Search from "./components/frontend/Search";
import Translate from "./components/frontend/Translate";
import YoutubeApi from "./components/youtube/components/App";
import Route from "./components/header/Route";
import Header from "./components/header/Header";
import CSSCheatSheet from "./components/frontend/CSSCheatSheet.js";

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <Resume />
      </Route>
      <Route path="/youtube-api">
        <YoutubeApi />
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
        <Fullstack />
      </Route>
      <Route path="/coding-challenges">
        <Backend />
      </Route>
    </div>
  );
};

export default App;
