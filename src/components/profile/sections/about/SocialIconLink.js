import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SocialIconLink = ({ value, label }) => (
  <>
    {value && (
      <a href={value} target="_blank">
        <i className={classNames('fab', `fa-${label}`)} />
      </a>
    )}
  </>
);

SocialIconLink.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SocialIconLink;
