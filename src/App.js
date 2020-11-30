import React, {useEffect, useState} from "react";
import Movie from './Movie';
import RatingsList from './RatingsList'
import './App.css';

const App = () => {

  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    getResults(); getRatings();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const getResults = async () => {
    const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_2d527d6t/${query}`);
    const data = await response.json();
    setResults(data.results);
  }

  const getRatings = () => {
    const ratingsArray = [];
    for (var i = 0; i < localStorage.length; i++){
      const rating = (JSON.parse(localStorage.getItem(localStorage.key(i))));
      ratingsArray.push(rating);
    }
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
            <RatingsList 
              id={rating.id}
              key={rating.id}
              title={rating.title}
              thumbsup={rating.thumbsUpCount}
              thumbsdown={rating.thumbsDownCount}
            />
          ))}
        </div>
      )
    }
  }

  return(
    <div className="App">
      <div className="heading">
        <h2 className="heading-text" onClick={() => window.location.reload(false)}>Rate Movies: The Application</h2>
        </div>
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
