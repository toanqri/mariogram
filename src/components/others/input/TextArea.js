import React, { Fragment } from 'react';
import { string, func } from 'prop-types';

const TextArea = ({
  value, placeholder, valueChange, ...props
}) => (
  <>
    <textarea
      spellCheck="false"
      placeholder={placeholder}
      value={value}
      onChange={valueChange}
      {...props}
    />
  </>
);

TextArea.defaultProps = {
  value: '',
  placeholder: '',
};

TextArea.propTypes = {
  value: string.isRequired,
  placeholder: string.isRequired,
  valueChange: func.isRequired,
};

export default TextArea;
