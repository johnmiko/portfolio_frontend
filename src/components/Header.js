import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Resume 
      </Link>
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
      <Link href="/backend" className="item">
        Backend
      </Link>
    </div>
  );
};

export default Header;
