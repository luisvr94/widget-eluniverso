import axios from "axios";
// const server = GLOBAL.server_url;

function client() {
  axios.defaults.withCredentials = false;
  let defaultOptions = {
    headers: {
      "Access-Control-Allow-Credentials": false,
      "Access-Control-Allow-Headers": false,
      "Access-Control-Allow-Origin": false
    }
  };
  return {
    get: (url, options = {}) => axios.get(url, { ...options }),
    post: async (url, data, options = {}) => {
      return axios.post(url, data, { ...defaultOptions, ...options });
    },
    put: (url, data, options = {}) =>
      axios.put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) =>
      axios.delete(url, { ...defaultOptions, ...options })
  };
}

export { client };
