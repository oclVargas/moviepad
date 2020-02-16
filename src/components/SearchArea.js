import React from 'react'

export default function SearchArea({ handleSubmit, handleChange }) {
    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form onSubmit={handleSubmit} >
                        <div className="input-field">
                            <input type="text" onChange={handleChange}  placeholder="Search for a movie..."></input>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}
