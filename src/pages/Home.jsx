import React from 'react';
import Cinema from '../components/Cinema';
import FilmsList from '../components/FilmsList';
import cinema from '../data/cinema';

const Home = ({data, setData}) => {
    return (
        <>
            <h1>Home</h1>
            <Cinema cinema={cinema}/>
            <FilmsList films={data} setFilms={setData}/>
        </>
    )
}

export default Home;