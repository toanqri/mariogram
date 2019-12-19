import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

const MapAvatars = ({ avatars, loading, selectAvatar }) => {
  const map_avatars = avatars.map((a) => (
    <img
      key={a}
      src={`/images/avatars/${a}`}
      data-avatar={`avatar-${a}`}
      className="pro_ava_avts"
      onClick={() => selectAvatar(a)}
    />
  ));

  return (
    <Scrollbars style={{ height: '300px' }} className="pro_ava_middle">
      <div className="pro_ava_content">
        {loading ? <Spinner /> : map_avatars}
      </div>
    </Scrollbars>
  );
};

MapAvatars.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
  selectAvatar: PropTypes.func.isRequired,
};

export default MapAvatars;
