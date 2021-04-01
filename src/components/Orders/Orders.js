import React from 'react';

const Orders = (props) => {
    const {name, _id, price} = props;
    const reviewItemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    };

    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="bird-name">{name}</h4>
            <p><small>$ {price}</small></p>
            <br/>
            <button 
                className="main-button"
                onClick={() => props.removeProduct(_id)}
            >Remove </button>
        </div>
    );
};

export default Orders;