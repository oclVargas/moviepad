import React from 'react';
import Movie from './Movie';

export default function MovieList({movies}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {movies.map(movie => {
                        return (
                            <Movie key={movie.id} image={movie.poster_path} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
