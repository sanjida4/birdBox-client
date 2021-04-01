import React from 'react';

const Bird = (props) => {
    const { imageURL, name, price } = props.product;

    return (
        <div style ={{marginLeft: '50px', paddingLeft: '200px', paddingBottom: '30px'}} className="col-md-3">
            <img style={{ height: '300px', width: '350px'}} src={imageURL} alt="" />
            <h4>{name}</h4>
            <h5>Price: {price}</h5>
            { props.showAddToCart === true && <button className= 'btn btn-primary'
            onClick={() => props.handleAddProduct(props.product)}
            >Buy Now</button>}
        </div>
    );
};

export default Bird;