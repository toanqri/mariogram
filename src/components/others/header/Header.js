import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import Search from '../search/Search';
import HeaderOptions from './HeaderOptions';
import HeaderTopLinks from './TopLinks';
import HeaderLogo from './Logo';

function Header({ q, onChangedQ, isLoggedIn, currentUser }) {
  const [showOptions, setShowOptions] = useState(false);

  function toggleOptions() {
    setShowOptions(!showOptions);
  }

  return (
    <div className="header">
      <HeaderLogo />
      {isLoggedIn && (
        <Search q={q} onChangedQ={onChangedQ} />
      )}
      <div className="header_right">
        <HeaderTopLinks isLoggedIn={isLoggedIn} currentUser={currentUser} />
        {isLoggedIn && (
          <span className="show_more" onClick={toggleOptions}>
            <MdExpandMore />
          </span>
        )}
      </div>
      {showOptions ? (
        <HeaderOptions toggleOptions={toggleOptions} />
      ) : null}
    </div>
  );
}

export default Header;
