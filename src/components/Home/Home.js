import React, { useEffect, useState } from 'react';
import './Home.css';
import Bird from '../Bird/Bird';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/birds')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        fetch('http://localhost:5000/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => setCart(data))
    }, [])

    const handleAddProduct = (product) =>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    products.map(pd => <Bird 
                        key={pd._id}
                        showAddToCart={true}
                        handleAddProduct = {handleAddProduct}
                        product={pd}
                        ></Bird>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
                    <Link to="/placeOrder">
                        <button className="main-button">Review Order</button>
                    </Link>
               </Cart>
            </div>
            
        </div>
    );
};

export default Home;