import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from './sections/user-posts/Posts';
import Followers from './sections/followers/Followers';
import Followings from './sections/followings/Followings';

function ProfileRoutes({ path, param: username, isMe }) {

  return (
    <div className="hmm">
      <Switch>
        <Route
          path={path}
          exact
          component={() => <Posts username={username} isMe={isMe} />}
        />
        <Route
          path={`${path}/followers`}
          component={() => <Followers username={username} />}
        />
        <Route
          path={`${path}/followings`}
          component={() => <Followings username={username} />}
        />
        <Redirect to="/error" />
      </Switch>
    </div>
  );
}

export default ProfileRoutes;
