import React from 'react';

import './DataTable.scss';

export const DataTable = (props) => {
	let types = {
		series: 'series',
		movie: 'películas',
		episode: 'episodios'
	}

	const pageResults = (!isNaN(props.totalResults))
		? Math.ceil(props.totalResults / 10)
		: 0;


	const pageElems = (pageResults > 10) 
		? [...Array(pageResults).keys()].slice(0, 5).concat([...Array(pageResults).keys()].slice(-5))
		: Array(pageResults);
	
	return(
		<div className="datatable-container">
			<table className="datatable">
				<thead>
					<tr>
						<td>Título</td>
						<td>Año</td>
						<td>Tipo</td>
					</tr>
				</thead>
				<tbody>
					{
						props.movies.map((movie, index) => (
							<tr className="movie" key={ index } onClick={ () => { props.getMovieDetail(movie.imdbID) }}>
								<td>{ movie.Title }</td>
								<td>{ movie.Year }</td>
								<td>{ movie.Type }</td>
							</tr>
						))
					}
					{
						(props.movies.length === 0)
							? (
								<tr>
									<td colSpan="3">
										<label className="no-results">No hay resultados{
											(props.type.current !== null) 
												? (
													<span> de { types[props.type.current.value] }</span>
												) : types['movies']
										}{
											(props.keywords.current !== null)
												? (
													<span> para { props.keywords.current.value }</span>
												) : null
										}
										</label>
									</td>
								</tr>
							) : null
					}
				</tbody>
			</table>

			{
				(props.totalResults > 10) 
					? (
						<div className="pagination-container">
							{
								(pageResults > 10)
									? (
										Array.from(pageElems, (res, index) => (
											(index !== 5) ? (
												<button key={ index } className="btn btn-outline-primary" onClick={ () => {
													props.refreshTablePage({
														s: props.keywords.current.value,
														y: props.year.current.value,
														type: props.type.current.value,
														page: res + 1
													})
												}}>
													{ res + 1 }
												</button>
											) : (<div key={ index } className="sepparation-dots">...</div>)
										))
									) : (
										Array.from(pageElems, (res, index) => (
											<button key={ index } className="btn btn-outline-primary" onClick={ () => {
												props.refreshTablePage({
													s: props.keywords.current.value,
													y: props.year.current.value,
													type: props.type.current.value,
													page: res + 1
												})
											}}>
												{ res + 1 }
											</button>
										))
									)
							}
						</div>
					) : null
			} 
		</div>			
	)
}