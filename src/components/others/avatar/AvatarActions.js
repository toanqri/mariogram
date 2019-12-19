import React from 'react';
// import Notify from 'handy-notification';
import { post } from 'axios';
import PropTypes from 'prop-types';
import SecondaryButton from '../button/SecondaryButton';
import PrimaryButton from '../button/PrimaryButton';

const AvatarActions = (props) => {
  const {
    loading, back, avatar, of, group,
  } = props;

  const b = (e) => {
    e.preventDefault();
    back();
  };

  const changeAvatar = async (e) => {
    e.preventDefault();
    const {
      data: { success, mssg },
    } = await post('/api/change-avatar', { avatar, of, group });
    // Notify({
    //   value: mssg,
    //   done: () => (success ? location.reload() : null),
    // });
  };

  return (
    <div className="pro_ava_bottom_act">
      <SecondaryButton label="Cancel" onClick={b} />
      <PrimaryButton
        label="Apply"
        onClick={changeAvatar}
        disabled={loading}
        extraClass="btn_select_avatar"
      />
    </div>
  );
};

AvatarActions.propTypes = {
  loading: PropTypes.bool.isRequired,
  back: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  of: PropTypes.oneOf(['user', 'group']).isRequired,
  group: PropTypes.number,
};

export default AvatarActions;
