import React from 'react';
import { connect } from 'react-redux';

import './SearchFilters.scss';
import { searchFiltersActions } from './_actions';

class SearchFilters extends React.Component{
	constructor(props){
		super(props);

		this.search = this.search.bind(this);
	}

	search(){
		this.props.search({
			s: this.props.keywords.current.value,
			y: this.props.year.current.value,
			type: this.props.type.current.value
		});
	}

	render(){
		return(
			<div className="search-filters-container">
				<h3>Rellena los filtros de búsqueda</h3>
				<hr />
				<div className="row">
					<div className="col-md-3">
						<label className="form-label">Palabras en el título:</label>
						<input type="text" className="form-control" ref={ this.props.keywords } />
					</div>
					<div className="col-md-2">
						<label className="form-label">Año:</label>
						<input type="number" className="form-control" ref={ this.props.year } />
					</div>
					<div className="col-md-2">
						<label className="form-label">Tipo:</label>
						<select className="form-control" ref={ this.props.type }>
							<option value="movie">Película</option>
							<option value="series">Serie</option>
							<option value="episode">Episodio</option>
						</select>
					</div>
					<div className="col-md-2">
						<label>&nbsp;</label><br />
						<button className="btn btn-primary" onClick={ this.search }>Busca</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		search: (data) => dispatch(searchFiltersActions.search(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilters);