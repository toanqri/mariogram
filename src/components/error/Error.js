import React from 'react';
import { FadeIn } from 'animate-components';
import Title from '../others/Title';
import { c_first } from '../../utils/utils';
import AppLink from '../others/link/Link';
import { useAuth } from '../../context/auth';

function Error({ match }) {
  const { currentUser } = useAuth();
  const { params } = match;
  const what = params.what ? params.what : 'page';

  const title = c_first(`${what}`);

  return (
    <div className="error">
      <Title value={`Oops!! ${title} not found`} />

      <FadeIn duration="300ms">
        <div className="error_div">
          <div className="error_info">
            <span>
Oops,
              {what}
              {' '}
you're looking for does not exist!!
            </span>
          </div>

          <img src={require('../../assets/images/error.svg')} />

          <div className="error_bottom">
            <AppLink
              to={`/profile/${currentUser.username}`}
              label="View profile"
              className="sec_btn error_home"
            />
            <AppLink
              to="/"
              label="Try going to homepage"
              className="pri_btn error_login"
            />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Error;
