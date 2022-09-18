import React, { useState } from "react";
import Link from "./Link";

const Header = () => {
  const [frontMenuVisible, setFrontMenuVisible] = useState("hidden");
  const [backMenuVisible, setBackMenuVisible] = useState("hidden");
  const toggleFrontMenuVisible = () => {
    if (frontMenuVisible === "visible") {
      setFrontMenuVisible("hidden");
    } else {
      setFrontMenuVisible("visible");
    }
  };
  const toggleBackMenuVisible = () => {
    if (frontMenuVisible === "visible") {
      setBackMenuVisible("hidden");
    } else {
      setBackMenuVisible("visible");
    }
  };
  return (
    <div className="ui borderless menu">
      <Link href="/" className="item">
        Resume
      </Link>
      <div
        className={`ui dropdown item`}
        onMouseEnter={() => setFrontMenuVisible("frontMenuVisible")}
        onMouseLeave={() => setFrontMenuVisible("hidden")}
      >
        <div onClick={() => toggleFrontMenuVisible()}>
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
        <div onClick={() => toggleBackMenuVisible()}>
          Backend
          <i class="dropdown icon"></i>
        </div>
        <div className={`menu transition ${backMenuVisible}`}>
          <Link href="/dota-api" className="item">
            Dota API
          </Link>
          {/* <Link href="/coding-challenges" className="item">
            Coding Challenges
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
