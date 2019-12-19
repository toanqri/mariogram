import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../button/PrimaryButton';
import SecondaryButton from '../button/SecondaryButton';

const ModalBack = ({
  back, btnType, label, disabled,
}) => {
  const b = (e) => {
    e.preventDefault();
    back();
  };

  const defaults = {
    label,
    onClick: b,
    disabled,
  };

  return (
    <>
      {btnType === 'primary' ? (
        <PrimaryButton {...defaults} />
      ) : (
        <SecondaryButton {...defaults} />
      )}
    </>
  );
};

ModalBack.defaultProps = {
  label: 'Back',
  disabled: false,
  btnType: 'primary',
};

ModalBack.propTypes = {
  back: PropTypes.func.isRequired,
  btnType: PropTypes.oneOf(['primary', 'secondary']),
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ModalBack;
