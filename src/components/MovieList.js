import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies, viewMovieInfo }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        movies.length === 0 ? <div className="center-align teal-text" style={{marginTop: "300px", textAlign: "center"}}>Search for movies and see the results displayed here!</div> :
                        movies.map(movie => {
                            return (
                                <Movie key={movie.id} viewMovieInfo={viewMovieInfo} movieId={movie.id} image={movie.poster_path} title={movie.title} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
