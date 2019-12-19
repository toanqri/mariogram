import React from 'react';
import classNames from 'classnames';

function PrimaryButton({
  label, onClick, extraClass, disabled, ...props
}) {
  return (
    <>
      <a
        href="#"
        className={classNames('pri_btn', extraClass, disabled ? 'a_disabled' : '')}
        onClick={onClick}
        {...props}
      >
        {typeof label === 'function' ? label() : label}
      </a>
    </>
  );
}

export default PrimaryButton;
