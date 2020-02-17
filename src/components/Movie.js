import React from 'react'

export default function Movie({ image, viewMovieInfo, movieId }) {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    { image == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="movie poster" style={{ width: "100%", height: "360px" }} /> : <img src={`https://image.tmdb.org/t/p/w185${image}`} alt="movie poster" style={{ width: "100%", height: "360px" }} /> }
                </div>
                <div className="card-content">
                   <p><a href="#" onClick={() => viewMovieInfo(movieId)}>View Details</a></p> 
                </div>
            </div>
        </div>
    )
}
