import React, { useState } from 'react';
import Nav from './components/Nav';
import SearchArea from './components/SearchArea';
import MovieList from './components/MovieList';
import MovieInfo from './components/MovieInfo';
import Pagination from './components/Pagination';

// TODO: change pagination to show only 10 buttons at once (ex. 11- 20, 21-30, 31-40, etc..)
// TODO: add a favorites section where user can star movies / rate maybe?
// TODO: change design 
// TODO: add react router to movie details page
// TODO: sort movies by language
// TODO: add warning when no results found -- DONE!! YAY!!

function App() {
  const [ movies, setMovies ] = useState([]);
  const [ searchQuery, setsearchQuery ] = useState('');
  const [ totalResults, settotalResults] = useState(0);
  const [ currentPage, setcurrentPage ] = useState(1);
  const [ currentMovie, setcurrentMovie ] = useState(null);
  const [ resultsFound, setresultsFound ] = useState(true);
  const apiKey = process.env.REACT_APP_API;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        // do something here about sending in a blank string might help hehe
        // if data.results is empty/ull/undefined then setMovies to empty array
        // data.results === undefined ? setMovies([]) : setMovies([...data.results]);
        if (data.results === undefined) {
          setresultsFound(false);
          setMovies([])
        } else {
          setMovies([...data.results])
          if (data.results.length === 0) {
            setresultsFound(false);
          }
        }
        settotalResults(data.total_results);
      })
  }

  const handleChange = (e) => {
    setsearchQuery(e.target.value)
  }

  const nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      setMovies([...data.results]);
      setcurrentPage(pageNumber);
    })
  }

  const numberPages = Math.floor(totalResults / 20);

  const viewMovieInfo = (id) => {
    const filteredMovie = movies.filter(movie => movie.id === id);

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    setcurrentMovie(newCurrentMovie);
  }

  const closeMovieInfo = () => {
    setcurrentMovie(null);
  }

  return (
    <div className="App">
      <Nav />
      { currentMovie === null ? 
        <div><SearchArea handleSubmit={handleSubmit} handleChange={handleChange} /></div> 
        : <MovieInfo currentMovie={currentMovie} closeMovieInfo={closeMovieInfo} /> 
      }
      {
        currentMovie === null && resultsFound === false && totalResults === 0 ?
        <div className="center-align red-text" style={{marginTop: "300px", textAlign: "center"}}>NO RESULTS FOUND</div> : <MovieList movies={movies} viewMovieInfo={viewMovieInfo} />
      }

      { totalResults > 20 ? 
        <Pagination pages={numberPages} nextPage={nextPage} currentPage={currentPage} /> 
        : "" 
      }
    </div>
  );
}

export default App;
