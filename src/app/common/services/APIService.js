import { API } from '../../const';

const search = (data) => {
	let url = API.BASE_URL + '?apikey=' + API.API_KEY;

	Object.keys(data).forEach((key) => {
		if (data[key] !== ''){
			url += '&' + key + '=' + data[key]
		}
	});
	
	return fetch(url)
		.then(response => {
			if (!response.ok) {
				return Promise.reject(response.statusText);
			}

			return response.json();
		})
		.then(data => { return data });
}

const getMovieInfo = (id) => {
	let url = API.BASE_URL + '?apikey=' + API.API_KEY + '&i=' + id;

	return fetch(url)
		.then(response => {
			if (!response.ok) {
				return Promise.reject(response.statusText);
			}

			return response.json();
		})
		.then(data => { return data });
}

export const APIService = {
	search,
	getMovieInfo
}