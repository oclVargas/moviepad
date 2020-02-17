import React, { useState } from 'react';
import Nav from './components/Nav';
import SearchArea from './components/SearchArea';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';

function App() {
  const [ movies, setMovies ] = useState([]);
  const [ searchQuery, setsearchQuery ] = useState('');
  const [ totalResults, settotalResults] = useState(0);
  const [ currentPage, setcurrentPage ] = useState(1);
  const apiKey = process.env.REACT_APP_API;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setMovies([...data.results]);
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

  return (
    <div className="App">
      <Nav />
      <SearchArea handleSubmit={handleSubmit} handleChange={handleChange} />
      <MovieList movies={movies} />
      { totalResults > 20 ? <Pagination pages={numberPages} nextPage={nextPage} currentPage={currentPage} /> : "" }
    </div>
  );
}

export default App;
