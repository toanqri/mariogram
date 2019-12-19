import React from 'react';
import { array, string } from 'prop-types';
import { humanReadable } from '../../../../utils/utils';

const SearchSection = ({ searchList, listFor }) => {
  const len = searchList.length;

  return (
    <div className="s_d">
      <span className="s_header">{humanReadable(len, listFor)}</span>
      {searchList}
    </div>
  );
};

SearchSection.propTypes = {
  searchList: array.isRequired,
  listFor: string.isRequired,
};

export default SearchSection;
