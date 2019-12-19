import React from 'react';
import PropTypes from 'prop-types';
import AppLink from '../../../others/link/Link';

const AboutSection = ({ label, value, isLink }) => {
  const editLink = (text) => <AppLink url="/edit-profile" label={text} />;

  return (
    <div>
      <span className="a_label">{label}</span>
      {value ? (
        !isLink ? (
          <span className="a_info">
            {/*{label == 'Bio' ? <ToTags str={`${value}`} /> : value}*/}
          </span>
        ) : (
          <a className="a_info" href={value} target="_blank">
            {value}
          </a>
        )
      ) : (
        editLink(`Add ${label} account`)
      )}
    </div>
  );
};

AboutSection.defaultProps = {
  isLink: false,
};

AboutSection.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isLink: PropTypes.bool,
};

export default AboutSection;
