import React, { Fragment } from 'react';
import {
  string, func, bool, oneOfType,
} from 'prop-types';
import classNames from 'classnames';

const SecondaryButton = ({
  label,
  onClick,
  extraClass,
  disabled,
  ...props
}) => {
  const disabledClass = disabled ? 'sec_btn_disabled' : '';

  return (
    <>
      <a
        href="#"
        className={classNames('sec_btn', extraClass, disabledClass)}
        onClick={onClick}
        {...props}
      >
        {typeof label === 'function' ? label() : label}
      </a>
    </>
  );
};

SecondaryButton.defaultProps = {
  label: '',
  disabled: false,
  extraClass: '',
};

SecondaryButton.propTypes = {
  label: oneOfType([string, func]).isRequired,
  onClick: func.isRequired,
  extraClass: string,
  disabled: bool,
};

export default SecondaryButton;
