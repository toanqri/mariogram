import React from 'react';
import TextInput from '../input/Text';

function Search({ q, onChangedQ }) {
  return (
    <div>
      <div className="search_box">
        <TextInput
          placeholder="Search Instagram"
          autoFocus
          value={q}
          valueChange={(e) => onChangedQ(e.target.value)}
          className="search"
        />
      </div>
    </div>
  );
}

export default Search;
