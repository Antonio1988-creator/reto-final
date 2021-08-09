import React from 'react';
import { connect } from 'react-redux';

import SearchFilters from '../../common/components/SearchFilters/SearchFilters';
import { searchFiltersActions } from '../../common/components/SearchFilters/_actions';
import { DataTable } from '../DataTable/DataTable';
import { MovieDetail } from '../MovieDetail/MovieDetail';

class MovieFinder extends React.Component{
	constructor(props){
		super(props);

		this.keywords = React.createRef();
		this.year = React.createRef();
		this.type = React.createRef();
	}

	render(){
		return(
			<div className="movie-finder-container">
				<SearchFilters keywords={ this.keywords } year={ this.year } type={ this.type } />
				<hr />
				{
					(Object.keys(this.props.movieDetail).length > 0) ? (
						<MovieDetail movie={ this.props.movieDetail } />
					) : (
						<DataTable
							movies={ this.props.movies }
							type={ this.type } 
							keywords={ this.keywords }
							year={ this.year }
							totalResults={ this.props.totalResults } 
							getMovieDetail={ this.props.getMovieInfo }
							refreshTablePage={ this.props.search }
						/>
					)
				}
			</div>			
		)
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.searchManager.movies,
		movieDetail: state.searchManager.movieDetail,
		totalResults: state.searchManager.totalResults
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getMovieInfo: (data) => dispatch(searchFiltersActions.getMovieInfo(data)),
		search: (data) => dispatch(searchFiltersActions.search(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieFinder);
