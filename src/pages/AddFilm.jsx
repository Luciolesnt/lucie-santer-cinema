import PropTypes from 'prop-types';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const AddFilm = (props) => {
    const navigate = useNavigate();
    const initialState =   {
        title: "",
        year: "",
        image:"",
        crew: "",
        details: {
          resume: "Lorem ipsum......blabla",
          filmingYear: "1995",
        },
    };
    const [film, setFilm] = useState(initialState);
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(film.title && film.year && film.image && film.crew !== "") {
            console.log(film)
            props.setData([...props.data, film])
            navigate(`/films/${film.title}`)
        }
    }
    return (
        <div className="first">
            <form onSubmit={handleSubmit}>
                <label>
                    Title :
                    <input
                    type="text"
                    value={film.title}
                    onChange={e => setFilm({
                        title: e.target.value,
                        year: film.year,
                        crew: film.crew,
                        image: film.image,
                        details: film.details,
                    })}
                    />
                </label>
                <label>
                    Year :
                    <input
                    type="text"
                    value={film.year}
                    onChange={e => setFilm({
                        title: film.title,
                        year: e.target.value,
                        crew: film.crew,
                        image: film.image,
                        details: film.details,
                    })}
                    />
                </label>
                <label>
                    Crew :
                    <input
                    type="text"
                    value={film.crew}
                    onChange={e => setFilm({
                        title: film.title,
                        year: film.year,
                        crew: e.target.value,
                        image: film.image,
                        details: film.details,
                    })}
                    />
                </label>
                <label>
                    Image URL :
                    <input
                    type="text"
                    value={film.image}
                    onChange={e => setFilm({
                        title: film.title,
                        year: film.year,
                        crew: film.crew,
                        image: e.target.value,
                        details: film.details,
                    })}
                    />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
}

AddFilm.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    crew: PropTypes.string,
    image: PropTypes.string,
};
    
export default AddFilm;
