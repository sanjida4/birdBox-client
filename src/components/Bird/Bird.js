import React from 'react';

const Bird = ({ bird }) => {
    return (
        <div style ={{marginLeft: '50px', paddingLeft: '200px', paddingBottom: '30px'}} className="col-md-3">
            <img style={{ height: '300px', width: '350px'}} src={bird.imageURL} alt="" />
            <h4>Name: {bird.name}</h4>
            <h5>Price: {bird.price}</h5>
            <button className= 'btn btn-primary'>Buy Now</button>
        </div>
    );
};

export default Bird;