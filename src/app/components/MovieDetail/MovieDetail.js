import React from 'react';

import './MovieDetail.scss';

export const MovieDetail = (props) =>{
	let types = {
		series: 'Serie',
		movie: 'Películo',
		episode: 'Episodio'
	}

	return(
		<div className="movie-detail-container">
			<h4>{ props.movie.Title }</h4>
			<div className="poster-container">
				<img src={ props.movie.Poster } alt="poster" />
			</div>
			<div className="row m-row-bot">
				<div className="plot">
					<h5>Tipo</h5> { types[props.movie.Type] }
				</div>
				<div className="plot">
					<h5>Género</h5> { props.movie.Genre }
				</div>
				<div className="plot">
					<h5>Actores</h5> { props.movie.Actors }
				</div>
			</div>
			<div className="row m-row-bot">
				<div className="plot">
					<h5>Idioma</h5> { props.movie.Language }
				</div>
				<div className="plot">
					<h5>Año</h5> { props.movie.Genre }
				</div>
				<div className="plot">
					<h5>Fecha estreno</h5> { props.movie.Released }
				</div>
				<div className="plot">
					<h5>Puntuación IMDB</h5> { props.movie.imdbRating }
				</div>
			</div>
			<div className="row m-row-bot">
				<div className="plot">
					<h5>Premios</h5> { props.movie.Awards }
				</div>
			</div>
			<div className="row m-row-bot">
				<div className="plot">
					<h5>Argumento</h5> { props.movie.Plot }
				</div>
			</div>
		</div>			
	)
}