import React, { useEffect, useState } from 'react';
import ToolTip from 'react-tooltip';
import SuggestedList from './SuggestedList';
import Loading from '../IsLoading';
import { cLoading } from '../../../utils/utils';
import AppLink from '../link/Link';
import api from '../../../api/helpers';
import { showError } from '../../../utils/helpers';

function Suggested({ when }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);

  function _getSuggestedUsers() {
    setLoading(true);
    api.get('/users/suggested')
      .then((response) => {
        setUsers(response.content);
      })
      .catch((error) => {
        showError(error.message);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    _getSuggestedUsers();
  }, []);


  return (
    <div>
      <div className="recomm">
        <div className="recomm_top">
          <span>Suggested</span>
          <a
            href="#"
            className="recomm_refresh"
            data-tip="refresh"
            // onClick={this.updateUsers}
          >
            {/* <FAIcon icon="sync-alt" /> */}
          </a>
          <AppLink url="/explore" className="recomm_all" data-tip="view all">
            {/* <FAIcon icon="chevron-right" /> */}
          </AppLink>
        </div>

        <div
          className="recomm_main"
          style={{ height: loading ? 100 : 'inherit' }}
        >
          <Loading loading={loading} />

          <div className={cLoading(loading)}>
            {users.length !== 0 ? (
              users.map((u) => (
                <SuggestedList key={u.id} {...u} when={when} />
              ))
            ) : null}
          </div>
        </div>
      </div>

      <ToolTip />
    </div>
  );
}

export default Suggested;
