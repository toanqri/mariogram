import React from 'react';
import { Image } from 'semantic-ui-react';
import AppLink from '../../others/link/Link';
import { DEFAULT_AVATAR } from '../../../config/Constants';

function PostTopDetails({ details }) {
  const {
    owner,
    firstName,
    lastName,
  } = details;

  return (
    <>
      <div className="p_i_img">
        <Image src={owner.avatarUrl || DEFAULT_AVATAR} />
      </div>
      <div className="p_i_1" style={{ top: 'inherit' }}>
        <AppLink
          url={`/profile/${owner && owner.username}`}
          title={owner && owner.username}
          label={owner && owner.username}
        />
      </div>
    </>
  );
}

export default PostTopDetails;
