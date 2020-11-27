import React, {useEffect, useState} from "react";
import Movie from './Movie';
import './App.css';

const App = () => {

  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getResults();
  }, [query]);

  const getResults = async () => {
    const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_yd297has/${query}`);
    const data = await response.json();
    setResults(data.results);
    console.log(data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const renderResults = e => {
    if (! results) {
      return null;
    } else {
      return (
        <div className="movies">
          {results.map(result => (
            <Movie
              id={result.id}
              key={result.id} 
              title={result.title} 
              image={result.image} 
              year={result.description}
            />
          ))}
        </div>
      )
    }
  }

  return(
    <div className="App">
      <h2 className="heading">Rate Movies: The Application</h2>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Enter a movie to search..." value={search} onChange={updateSearch} />
        <i className="fa fa-search fa-2x" />
      </form>
        {renderResults()}
    </div>
  );
}

export default App;
