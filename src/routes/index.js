import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from '../components/profile/Profile';
import Home from '../components/home/Home';
import EditProfile from '../components/edit-profile/EditProfile';
import ViewPost from '../components/post/view-post/ViewPost';
import AdminLogin from '../components/admin/AdminLogin';
import Error from '../components/error/Error';
import Login from '../components/login/Login';
import PrivateRoute from './PrivateRoute';
import Logout from '../components/logout/Logout';
import Register from '../components/register/Register';
import UnhealthyPosts from '../components/admin/unhealthy-posts/UnhealthyPosts';
import Advertisements from '../components/admin/advertisements/Advertisements';
import MaliciousUsers from '../components/admin/malicious-users/MaliciousUsers';

const Routes = () => (
  <div className="badshah">
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/profile/:username" component={Profile} />
      <PrivateRoute path="/logout" component={Logout} />
      <Route path="/error/:what" component={Error} />
      <PrivateRoute path="/edit-profile" component={EditProfile} />
      <PrivateRoute path="/post/:postId" component={ViewPost} />
      <Route path="/admin/login" component={AdminLogin} />
      <PrivateRoute path="/admin/advertisements" component={Advertisements} />
      <PrivateRoute path="/admin/unhealthy-posts" component={UnhealthyPosts} />
      <PrivateRoute path="/admin/malicious-users" component={MaliciousUsers()} />
      <Route component={Error} />
    </Switch>
  </div>
);

export default Routes;
