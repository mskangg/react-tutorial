import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, poster, genres,  synopsis}) {
    return (
        <div className="Movie">

            <div className="Movie__Column">
                <div className="Movie__Posters">
                    <MoviePoster poster={poster} alt={title} />
                </div>
            </div>

            <div className="Movie__Column">
                <div className="Movie__titles">
                     <MovieTitle title={title}/>
                </div>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)} 
                </div>
                <div className="Movie__Synopsises">
                    <MovieSynopsis synopsis={synopsis}/>
                </div>
            </div>
        </div>
    );
}

function MovieTitle({title}){
    return(
        <h1 className="Movie__Title">
            {title}
        </h1>
    )
}

function MoviePoster({ poster, alt }) {
    return (
        <img className="Movie__Poster" src={poster} alt={alt} />
    );
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">
            {genre}
        </span>
    );
}

function MovieSynopsis({synopsis}){
    return(
        <p className="Movie__Synopsis">
            {synopsis}
        </p>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MovieTitle.propTypes = {
    title: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

MovieSynopsis.propTypes = {
    synopsis: PropTypes.string.isRequired
}

export default Movie;