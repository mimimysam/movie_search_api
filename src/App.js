import React, {useEffect, useState} from "react";
import Movie from './Movie';
import RatingsTable from './RatingsTable'
import './App.css';

const App = () => {

  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    getResults();
  }, [query]);

  const getResults = async () => {
    const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_yd297has/${query}`);
    const data = await response.json();
    setResults(data.results);
    console.log(data);
    getRatings()
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const getRatings = () => {
    const ratingsArray = [];
    for (var i = 0; i < localStorage.length; i++){
      const rating = (JSON.parse(localStorage.getItem(localStorage.key(i))));
      ratingsArray.push(rating);
    }
      console.log(ratingsArray)
      setRatings(ratingsArray)
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

  const renderRatings = e => {
    if (! ratings) {
      return null;
    } else {
      return (
        <div>
          {ratings.map(rating => (
            <RatingsTable 
              id={rating.id}
              key={rating.id}
              title={rating.title}
              thumbsup={rating.thumbsUpCount}
              thumbsdown={rating.thumbsDownCount}/>
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
        {renderRatings()}
    </div>
  );
}

export default App;
