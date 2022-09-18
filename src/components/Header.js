import React, { useState } from "react";
import Link from "./Link";

const Header = () => {
  const [visible, setVisible] = useState("hidden");
  const toggleVisible = () => {
    if (visible === "visible") {
      setVisible("hidden");
    } else {
      setVisible("visible");
    }
  };
  return (
    <div className="ui borderless menu">
      <Link href="/" className="item">
        Resume
      </Link>
      <div
        className={`ui dropdown item`}
        onMouseEnter={() => setVisible("visible")}
        onMouseLeave={() => setVisible("hidden")}
      >
        <div onClick={() => toggleVisible()}>
          Frontend
          <i class="dropdown icon"></i>
        </div>
        <div className={`menu transition ${visible}`}>
          <Link href="/list" className="item">
            Search
          </Link>
          <Link href="/dropdown" className="item">
            Dropdown
          </Link>
          <Link href="/translate" className="item">
            Translate
          </Link>
          <Link href="/css-cheat-sheet" className="item">
            CSS Cheat Sheet
          </Link>
        </div>
      </div>
      <Link href="/backend" className="item">
        Backend
      </Link>
    </div>
  );
};

export default Header;
