import React from 'react';
import { Link } from 'react-router-dom';

const FilmsList = ({films, setFilms, ...props}) => {
    const deleteFilm = (id) => {
        const newFilmsList = films.filter((film) => film.title !== id);
        setFilms(newFilmsList);
    }
    return (
        <>
            {films ? 
                <>
                    <h2>List of films ({films.length})</h2>
                    <div id="filmsList">
                        {films.map((film, index) => {
                                return (
                                    <div className="card"  key={index}>
                                       <Link to={"/films/"+film.title}>
                                           <h3>{film.title} - {film.year}</h3>
                                           <p>Crew : {film.crew}</p>
                                           <img src={film.image} alt="Film poster" />
                                       </Link>
                                           {props.delete ? 
                                               <button onClick={() => deleteFilm(film.title)}>Delete</button> 
                                           : null }
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            : null}
        </>
    )
}

export default FilmsList;