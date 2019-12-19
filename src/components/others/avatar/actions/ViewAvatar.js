import React from 'react';
import ViewAvatar from '../ViewAvatar';

const ViewAvatarAction = ({
  view, back, when, id,
}) => {
  const src = '/users/${id}/avatar.jpg';

  return (
    <>{view ? <ViewAvatar imgSrc={src} back={back} /> : null}</>
  );
};


export default ViewAvatarAction;
