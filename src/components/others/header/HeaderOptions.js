import React from 'react';
import PropTypes from 'prop-types';
import AppLink from '../link/Link';

const HeaderOptions = ({ toggleOptions }) => {
  const clicked = () => toggleOptions();

  return (
    <div className="sp_options options">
      <ul className="o_ul">
        <li className="o_li" onClick={clicked}>
          <AppLink
            url="/edit-profile"
            className="o_a"
            alt="Edit"
            label="Edit"
          />
        </li>
        <li className="o_li">
          <a href="/logout" className="o_a" alt="Settings">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

HeaderOptions.propTypes = {
  toggleOptions: PropTypes.func.isRequired,
};

export default HeaderOptions;
