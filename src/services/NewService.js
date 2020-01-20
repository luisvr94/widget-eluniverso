import { client } from "../helpers/axios";

const GLOBAL = require("../helpers/globals");
const axios = client();
const server = GLOBAL.server_url;
const api = GLOBAL.api_ver;
export function getNews() {
  return axios.get(server + api, {
    params: {
      apikey: GLOBAL.API_KEY,
      host: GLOBAL.host_name,
      limit: GLOBAL.limit_page
    }
  });
}
