import React from 'react';
import PropTypes from 'prop-types';
import { addToFavourites } from '../../utils/user-interact-utils';
import d from '../../utils/API/DOM';
import SecondaryButton from './button/SecondaryButton';

const AddToFavourites = ({ user, username }) => {
  const add = (e) => {
    e.preventDefault();
    addToFavourites(user);
    new d('.af_btn').blur();
  };

  return (
    <div>
      <div className="recomm_teaser">
        <span>
Wanna add
          {username}
          {' '}
to your favourites list.
        </span>
        <SecondaryButton label="Add" onClick={add} />
      </div>
    </div>
  );
};

AddToFavourites.propTypes = {
  user: PropTypes.number,
  username: PropTypes.string.isRequired,
};

export default AddToFavourites;
