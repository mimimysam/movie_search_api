import style from './movie.module.css';
import React, {useState} from 'react';
import './App.css';
import Modal from "./Component/Modal";
import useModal from './Component/useModal';

const Movie = ({id, title, image, year}) => {

    const {isShowing, toggle} = useModal();
    const [description, setDescription] = useState({});
    const [ratings, setRatings] = useState({id,
        title,
        thumbsUpCount: 0,
        thumbsDownCount: 0});

    const getDescription = async () => {
        checkVoted()
        const response = await fetch(`https://imdb-api.com/en/API/Title/k_2d527d6t/${id}/directors,plot`);
        const data = await response.json();
        setDescription(data);
        toggle()
      }

    const checkVoted = () => {
        const retrieved = localStorage.getItem(id);
        if (retrieved !== null) {
            const votes = JSON.parse(retrieved);
            setRatings(votes)
        }
    }

    return (
        <div className={style.movie}>
            <h1>{title}</h1>
            <div className={style.container}>
                <img className={style.image} src={image} alt="movie poster" onClick={getDescription}/>
            </div>
            <h3>{year}</h3>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                id={id}
                title={title}
                year={year}
                image={image}
                directors={description.directors} 
                stars={description.stars}
                plot={description.plot}
                thumbsUpCount={ratings.thumbsUpCount}
                thumbsDownCount={ratings.thumbsDownCount}
            />
        </div>
    );
}

export default Movie;

