import { MOVIE, SEARCH_FILTER } from '../../../../const';
import { APIService } from '../../../services/APIService';

const search = (data) => {
	return dispatch => {
		const request = (data) => { return { type: SEARCH_FILTER.SEARCH_REQUEST, data }}
		const success = (res) => { return { type: SEARCH_FILTER.SEARCH_SUCCESS, res }};
		const failure = (error) => { return { type: SEARCH_FILTER.SEARCH_FAILURE, error }};

		dispatch(request(data));

		// Servicio API
		APIService.search(data)
			.then(
				res => {
					dispatch(success(res));
				},
				error => {
					dispatch(failure(error))
				}
			);
	}
}

const getMovieInfo = (id) => {
	return dispatch => {
		const request = (id) => { return { type: MOVIE.GET_MOVIE_INFO_REQUEST, id }}
		const success = (res) => { return { type: MOVIE.GET_MOVIE_INFO_SUCCESS, res }};
		const failure = (error) => { return { type: MOVIE.GET_MOVIE_INFO_FAILURE, error }};

		dispatch(request(id));

		// Servicio API
		APIService.getMovieInfo(id)
			.then(
				res => {
					dispatch(success(res));
				},
				error => {
					dispatch(failure(error))
				}
			);
	}
}

export const searchFiltersActions = {
	search,
	getMovieInfo
}