import React from 'react';


const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        console.log(product.price, product.quantity)
        total = total + product.price * product.quantity || 1;
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div style = {{marginLeft: '20px'}}>
            <h4>Your Cart:</h4>
            <p>Birds Ordered: {cart.length}</p>
            <p>Price: {formatNumber(total)}</p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;