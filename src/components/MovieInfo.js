import React from 'react'

export default function MovieInfo({ closeMovieInfo, currentMovie }) {
    return (
        <div className="container">
            <div className="row" onClick={closeMovieInfo} style={{ cursor: "pointer" , paddingTop: 50}}>
                <i className="fas ga-arrow-left"></i>
                <span style={{marginLeft: 10}}>Go back</span>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    { currentMovie.poster_path == null ? <img src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt="movie poster" style={{ width: "100%", height: 360 }} /> : 
                    <img src={`https://image.tmdb.org/t/p/w185${currentMovie.poster_path}`} alt="movie poster" style={{ width: "100%", height: 360 }} /> }
                </div>
                <div className="col s12 m8">
                    <div className="info-container">
                        <p>{ currentMovie.title }</p>
                        <p>{ currentMovie.release_date.substring(5).split('-').concat(currentMovie.release_date.substring(0, 4)).join('/') }</p>
                        <p>{ currentMovie.overview }</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
