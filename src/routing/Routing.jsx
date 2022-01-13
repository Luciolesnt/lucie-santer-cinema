import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from '../commons/NavBar';
import pages from '../data/pages'
import AddFilm from '../pages/AddFilm';
import Film from '../pages/Film';
import Films from '../pages/Films';
import Home from '../pages/Home';
import films from '../data/films'
// BrowserRouter (=Router) doit permettre de définir tout le routing de mon application
const Routing = (props) => {
    const [data, setData] = useState(films)
    return (
        <>
            <Router>
                <NavBar pages={pages} />
                <Routes>
                    <Route path="/addFilm" element={<AddFilm data={data} setData={setData}/>} />
                    <Route path="/films/:id" element={<Film data={data}/>}/>
                    <Route path="/films" element={<Films data={data} setData={setData}/>}/>
                    <Route exact path="/" element={<Home  data={data} setData={setData}/>}/>
                    <Route path="*" element={<Navigate to="/" />}/>                
                </Routes>
            </Router>
        </>
    )
}

export default Routing;