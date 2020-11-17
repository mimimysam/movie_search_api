import React, {useEffect, useState} from "react";
import Movie from './Movie';
import './App.css';

const App = () => {
  // const API_KEY = "k_2d527d6t";

  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Tenet');

  useEffect(() => {
    getResults();
  }, [query]);

  const getResults = async () => {
    const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_2d527d6t/${query}`);
    const data = await response.json();
    setResults(data.results);
    console.log(data.results);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-btn" type="submit">Search</button>
      </form>
      <div className="movies">
      {results.map(result => (
        <Movie
          key={result.title} 
          title={result.title} 
          image={result.image} 
          year={result.description}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
