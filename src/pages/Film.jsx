import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Film = ({data}) => {
    const {id} = useParams();
    const [film, setFilm] = useState();
    console.log(id)
    useEffect(() => {
       setFilm(data.find(film => film.title === id));
       console.log(film)
    }, [id, data, film])
    return (
        <div id="film">
            <h1>Film</h1>
            {film ? 
               <div className="card">
                   <h3>{film.title} - {film.year}</h3>
                   <p>Crew : {film.crew}</p>
                   <img src={film.image} alt="Film poster" /> 
                   <h4>
                      <p>Filming Year : {film.details.filmingYear}</p>
                      <p>Resume : {film.details.resume}</p>
                   </h4>
               </div>
            : null}
        </div>
    )
}

export default Film;