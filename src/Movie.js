import style from './movie.module.css';
import React, {useState} from 'react';
import './App.css';
import Modal from "./Component/Modal";
import useModal from './Component/useModal';

const Movie = ({id, title, image, year}) => {

    const {isShowing, toggle} = useModal();
    const [description, setDescription] = useState([]);

    const getDescription = async () => {
        const response = await fetch(`https://imdb-api.com/en/API/Title/k_2d527d6t/${id}/directors,plot`);
        const data = await response.json();
        setDescription(data);
        console.log(data);
        console.log(data.stars);
        toggle()
      }

    return (
        <div className={style.movie}>
            <h1>{title}</h1>
            <img src={image} alt="" onClick={getDescription}/>
            <h3>{year}</h3>
            {/* <button className="button-default" onClick={toggle}>Show Modal</button> */}
            <Modal
                isShowing={isShowing}
                hide={toggle}
                title={title}
                year={year}
                directors={description.directors} 
                stars={description.stars}
                plot={description.plot} 
            />
        </div>
    );
}

export default Movie;
