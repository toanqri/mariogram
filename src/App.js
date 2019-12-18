import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { NotificationContainer } from 'react-notifications';
import Header from './components/others/header/Header';
import NotiSpeak from './components/others/noti-speak';
import SideBar from './components/others/sidebar/sidebar';
import Routes from './routes';
import { TOKEN_KEY } from './config/Constants';
import api from './api/helpers';
import { AuthContext } from './context/auth';

function App() {
  const savedToken = JSON.parse(localStorage.getItem(TOKEN_KEY));

  const [token, setToken] = useState(savedToken);

  const saveToken = (data) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
    setToken(data);
  };

  const currentUser = token ? jwtDecode(token).name : '';

  if (savedToken) {
    api.init({ token: savedToken });
  }

  // const { unreadNotifications, unreadMessages } = this.props;

  return (
    <AuthContext.Provider value={{ token, setToken: saveToken, currentUser }}>
      <Router>
        <div className="app">
          <NotificationContainer />
          <Header isLoggedIn={token} currentUser={currentUser} />
          {/* <NotiSpeak un={unreadNotifications} /> */}
          {/* <SideBar un={unreadNotifications} uc={unreadMessages} /> */}
          <Routes />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

// const mapStateToProps = (store) => ({
//   unreadNotifications: store.Notification.unreadNotifications,
// });
//
// const mapDispatchToProps = (dispatch) => bindActionCreators(
//   {
//     setToken,
//     getUnreadNotifications,
//   },
//   dispatch,
// );
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export { App as PureApp };
