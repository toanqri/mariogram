import React from 'react';
import { string, func, oneOfType } from 'prop-types';
import { Input } from 'semantic-ui-react';

const FileInput = ({
  label, value, fileChange, labelClass, ...props
}) => (
  <>
    <Input
      type="file"
      id="file_input"
      accept="image/*|video/*"
      value={value}
      onChange={fileChange}
      {...props}
    />
    <label htmlFor="file_input" className={labelClass}>
      {typeof label === 'function' ? label() : label}
    </label>
  </>
);

FileInput.defaultProps = {
  value: '',
  label: '',
  labelClass: '',
};

FileInput.propTypes = {
  value: string.isRequired,
  fileChange: func.isRequired,
  label: oneOfType([string, func]).isRequired,
  labelClass: string,
};

export default FileInput;
