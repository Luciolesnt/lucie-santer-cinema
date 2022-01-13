import React from 'react';
import FilmsList from '../components/FilmsList';

const Films = ({data, setData}) => {
    return (
        <>
            {data ? 
                <>
                    <h1>Films</h1>
                    <FilmsList films={data} delete={true} setFilms={setData}/>
                </>
            : null
            }
            
        </>
    )
}

export default Films;