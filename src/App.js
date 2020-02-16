import React, { useState } from 'react';
import Nav from './components/Nav';
import SearchArea from './components/SearchArea';

function App() {
  const [ movies, setMovies ] = useState([]);
  const [ searchQuery, setsearchQuery ] = useState('');
  const apiKey = process.env.REACT_APP_API;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setMovies([...data.results]);
      })
  }

  const handleChange = (e) => {
    setsearchQuery(e.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <SearchArea handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
}

export default App;
