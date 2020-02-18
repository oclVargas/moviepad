import React from 'react'

export default function Movie({ image, viewMovieInfo, movieId, title }) {
    return (
        <div className="col s12 m6 l3">
            <div className="card large">
                <div className="card-image waves-effect waves-block waves-light">
                    { image == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="movie poster" style={{ width: "100%", height: "290px", cursor: "default" }} /> : <img src={`https://image.tmdb.org/t/p/w185${image}`} alt="movie poster" style={{ width: "100%", height: "290px", cursor: "default" }} /> }
                </div>
                
                <div className="card-content">
                    <p className="card-title">{title}</p>
                    <div className="card-action">
                        <p><a className="black-text" href="#" onClick={() => viewMovieInfo(movieId)}>View Details</a></p> 
                    </div>
                </div>
            
            </div>
        </div>
    )
}
