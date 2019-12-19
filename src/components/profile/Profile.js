import React, { useEffect, useState } from 'react';
import { FadeIn } from 'animate-components';
import { useParams, useRouteMatch } from 'react-router-dom';
import Title from '../others/Title';
import { cLoading } from '../../utils/utils';
import Banner from './banner/Banner';
import ProfileNav from './Nav';
import Nothing from '../others/Nothing';
import ProfileRoutes from './ProfileRoutes';
import Loading from '../others/IsLoading';
import api from '../../api/helpers';
import { useAuth } from '../../context/auth';
import { showError } from '../../utils/helpers';

function Profile() {
  const [loading, setLoading] = useState(false);
  const { username } = useParams();
  const [user, setUser] = useState({});
  const { currentUser } = useAuth();
  const { path, url } = useRouteMatch();

  function _fetchProfile() {
    setLoading(true);
    api.get(`/users/${username}`)
      .then((response) => {
        setUser(response);
      })
      .catch((error) => showError(error.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    _fetchProfile();
  }, [username]);

  return (
    <div>
      <Title
        value={`@${username} (${user.firstName} ${user.lastName})`}
        desc={`Connect with ${username}'s profile`}
      />

      <Loading loading={loading} when="page" />

      <FadeIn duration="300ms" className={cLoading(loading)}>
        <Banner
          user={user}
          isMe={currentUser.username === username}
          updateFollowers={(number) => {
            setUser({ ...user, numberOfFollowers: user.numberOfFollowers + number, following: number === 1 });
          }}
          updateFollowings={(number) => {
            setUser({ ...user, numberOfFollowings: user.numberOfFollowings + number });
          }}
        />
        {(currentUser.username === username || user.following) ? (
          <div>
            <ProfileNav url={url} isMe={currentUser.username === username} />
            <ProfileRoutes path={path} param={username} isMe={currentUser.username === username} />
          </div>
        ) : (
          <div style={{ marginTop: 85 }}>
            <Nothing
              mssg={`Account is private. Follow to connect with ${username}!!`}
              showMssg
            />
          </div>
        )}
      </FadeIn>
    </div>
  );
}

export default Profile;
