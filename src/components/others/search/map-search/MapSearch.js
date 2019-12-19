import React from 'react';
import PropTypes from 'prop-types';
import UserSearch from './UserSearch';
import SearchSection from './Section';

const MapSearch = ({
  users, clicked,
}) => {
  const map_users = users.map((u) => (
    <UserSearch key={u.id} {...u} clicked={clicked} />
  ));

  return (
    <div className="search_div">
      <SearchSection searchList={map_users} listFor="member" />
    </div>
  );
};

MapSearch.propTypes = {
  users: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  hashtags: PropTypes.array.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default MapSearch;
