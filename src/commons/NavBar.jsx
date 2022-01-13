import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav>
            {props.pages ? props.pages.map((page, index) =>{ return <Link key={index} to={page.to}>{page.nom}</Link>}) : null}
        </nav>
    )
}

export default NavBar;