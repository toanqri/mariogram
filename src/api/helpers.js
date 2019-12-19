import axios from 'axios';

const methods = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  patch: 'PATCH',
  delete: 'DELETE',
};

const client = axios.create({
  baseURL: 'http://10.10.71.19:8080',
  headers: { 'Content-Type': 'application/json' },
});

const init = ({ token, acceptLanguage }) => {
  if (token) {
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  client.defaults.timeout = 30000;
  if (acceptLanguage) {
    client.defaults.headers.post['Accept-Language'] = acceptLanguage;
  }
};

const request = async (options, isHeader = true) => {
  if (!isHeader) {
    client.defaults.headers.common.Authorization = null;
  }
  console.log('[REQUEST]', { url: client.defaults.baseURL + options.url, method: options.method, data: options.data ? JSON.parse(options.data) : null });
  const onSuccess = (response) => {
    console.log('[RESPONSE]', response);
    if (response && response.status !== 200) {
      throw response.data ? response.data.message : '';
    }
    // if (response && response.status === 401) {
    //   Navigation.handleDeepLink({
    //     link: 'unauthorized',
    //     payload: '',
    //   });
    // }
    return response.data ? response.data.data : {};
  };
  const onError = (error) => {
    console.log('[ERROR]', JSON.stringify(error, null, 2));
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 401) {
        // Alerts.error(error.response.data && error.response.data.error, () => {
        //   localStorage.token.remove();
        //   store.dispatch(appLogin());
        // });
        return;
      }
      throw error.response.data;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      throw new Error('Can not connect to server, try again later!');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw error;
    }
    // throw error && error.response && error.response.data && error.response.data.message;
  };

  return client(options).then(onSuccess).catch(onError);
};

const get = (url, params, header = true, baseUrl) => (
  request({ baseUrl, url, method: methods.get }, header)
);

const post = (url, data, header = true, baseUrl) => (
  request({
    baseUrl, url, method: methods.post, data: JSON.stringify(data),
  }, header)
);

const put = (url, data, header = true) => (
  request({ url, method: methods.put, data: JSON.stringify(data) }, header)
);

const patch = (url, data, header = true) => (
  request({ url, method: methods.patch, data: JSON.stringify(data) }, header)
);

const del = (url, data, header = true) => (
  request({ url, method: methods.delete, data: JSON.stringify(data) }, header)
);

const api = {
  client,
  init,
  get,
  post,
  put,
  patch,
  del,
};

export default api;
