import React, { useState } from "react";
import Link from "./Link";

const Header = () => {
  const [frontMenuVisible, setFrontMenuVisible] = useState("hidden");
  const [fullstackMenuVisible, setFullstackMenuVisible] = useState("hidden");
  const [backMenuVisible, setBackMenuVisible] = useState("hidden");
  const toggleVisibility = (stateVar, setStateVar) => {
    if (stateVar === "visible") {
      setStateVar("hidden");
    } else {
      setStateVar("visible");
    }
  };
  return (
    <div className="ui borderless menu">
      <Link href="/" className="item">
        Resume
      </Link>
      <div
        className={`ui dropdown item`}
        onMouseEnter={() => setFullstackMenuVisible("visible")}
        onMouseLeave={() => setFullstackMenuVisible("hidden")}
      >
        <div
          onClick={() =>
            toggleVisibility(fullstackMenuVisible, setFullstackMenuVisible)
          }
        >
          Full Stack
          <i class="dropdown icon"></i>
        </div>
        <div className={`menu transition ${fullstackMenuVisible}`}>
          <Link href="/dota-api" className="item">
            Dota API
          </Link>
        </div>
      </div>
      <div
        className={`ui dropdown item`}
        onMouseEnter={() => setFrontMenuVisible("visible")}
        onMouseLeave={() => setFrontMenuVisible("hidden")}
      >
        <div
          onClick={() =>
            toggleVisibility(frontMenuVisible, setFrontMenuVisible)
          }
        >
          Frontend
          <i class="dropdown icon"></i>
        </div>
        <div
          className={`menu transition ${frontMenuVisible}`}
          // this seems to mess with the button a bit, need to look into
          // onClick={() => setFrontMenuVisible("hidden")}
        >
          <Link href="/wiki-search" className="item">
            Wiki Search
          </Link>
          <Link href="/translate" className="item">
            Translate
          </Link>
          <Link href="/css-cheat-sheet" className="item">
            CSS Cheat Sheet
          </Link>
        </div>
      </div>
      <div
        className={`ui dropdown item`}
        onMouseEnter={() => setBackMenuVisible("visible")}
        onMouseLeave={() => setBackMenuVisible("hidden")}
      >
        <div
          onClick={() => toggleVisibility(backMenuVisible, setBackMenuVisible)}
        >
          Backend
          <i class="dropdown icon"></i>
        </div>
        <div className={`menu transition ${backMenuVisible}`}>
          <Link href="/coding-challenges" className="item">
            Coding Questions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
