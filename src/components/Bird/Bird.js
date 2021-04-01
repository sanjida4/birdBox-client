import React from 'react';

const Bird = ({ bird }) => {
    return (
        <div className="col-md-3">
            <img style={{ height: '300px' }} src={bird.imageURL} alt="" />
            <h3>Name: {bird.name}</h3>
            <h4>Price: {bird.price}</h4>
        </div>
    );
};

export default Bird;