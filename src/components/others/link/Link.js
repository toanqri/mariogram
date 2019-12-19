import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AppLink extends Component {
  render() {
    const {
      label, url, children, ...props
    } = this.props;

    return (
      <>
        <Link to={url} {...props}>
          {children || label}
        </Link>
      </>
    );
  }
}

AppLink.defaultProps = {
  label: '',
  url: '',
};

AppLink.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default AppLink;
