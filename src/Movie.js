import React from 'react';
import style from './movie.module.css';

const Movie = ({title, image, year}) => {
    return (
        <div className={style.movie}>
            <h1>{title}</h1>
            <img src={image} alt="" />
            {/* <h2>Director</h2> */}
            <h3>{year}</h3>
            {/* <p>Description</p> */}
        </div>
    );
}

export default Movie;