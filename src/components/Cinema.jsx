import React from 'react';

const Cinema = (props) => {
    return (
        <>
            {props.cinema ? 
                <>
                    <h2>Cinema {props.cinema.name}</h2>
                    <p className="pres">Openning time : {props.cinema.open}</p>
                    <p className="pres">Address : {props.cinema.address}</p>
                    <p className="pres">Numbers of rooms : {props.cinema.rooms}</p>
                </>
            : null}

        </>
    )
}

export default Cinema;