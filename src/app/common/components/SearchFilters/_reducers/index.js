import { MOVIE, SEARCH_FILTER } from "../../../../const"


const initialState = {
	movies: [],
	totalResults: 0,
	movieDetail: {}
}

export const searchManager = (state = initialState, action) => {
	switch(action.type){
		case SEARCH_FILTER.SEARCH_REQUEST:
			return state;

		case SEARCH_FILTER.SEARCH_SUCCESS:
			return {
				movieDetail: {},
				movies: action.res.Search || [],
				totalResults: parseInt(action.res.totalResults)
			};

		case SEARCH_FILTER.SEARCH_FAILURE:
			return initialState;

		case MOVIE.GET_MOVIE_INFO_REQUEST:
			return state;

		case MOVIE.GET_MOVIE_INFO_SUCCESS:
			return {
				...state,
				movieDetail: action.res
			};

		case MOVIE.GET_MOVIE_INFO_FAILURE:
			return initialState;

		default:
			return state;
	}
}