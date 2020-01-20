import { client } from '../helpers/axios';

const GLOBAL = require('../helpers/globals');
const axios = client();
const server = GLOBAL.server_url;
const api = GLOBAL.api_ver;
export function getNews(path, opts = {}) {
	// const headers = Object.assign({}, opts.headers || {}, {
	// 	'Content-type': 'application/json; charset=UTF-8'
	// });
	// async;
	// const response = await fetch(
	// 	path,
	// 	Object.assign({ method: 'POST', credentials: 'same-origin' }, opts, {
	// 		headers
	// 	})
	// );

	return axios.get(server + api, {
		params: {
			apikey: GLOBAL.API_KEY,
			host: GLOBAL.host_name,
			limit: GLOBAL.limit_page
		}
	});

	// const data = await response.json();

	// if (data.error) {
	// 	throw new Error(data.error);
	// }

	// return data;
}
