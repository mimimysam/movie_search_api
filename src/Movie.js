import React from 'react';
import style from './movie.module.css';

const Movie = ({id, title, image, year}) => {

    const getDescription = async () => {
        const response = await fetch(`https://imdb-api.com/en/API/Title/k_2d527d6t/${id}/directors,plot`);
        const data = await response.json();
        // setResults(data.results);
        console.log(data);
      }

    return (
        <div className={style.movie}>
            <h1>{title}</h1>
            <img src={image} alt="" onClick={getDescription}/>
            {/* <h2>Director</h2> */}
            <h3>{year}</h3>
            {/* <p>Description</p> */}
        </div>
    );
}

export default Movie;