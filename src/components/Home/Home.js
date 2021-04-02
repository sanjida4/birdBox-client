import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [loader, setLoader] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://apple-pudding-32420.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoader(false);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>

            {
                loader ? (
                    <div className="loading">
                        <div className="loader"></div>
                    </div>
                ) : (
                        <>
                            <Header />
                            <div className="container" style={{ alignSelf: 'stretch', marginTop: '60px'}}>
                                <div className="row">

                                    <div className="w-100"></div>

                                    {
                                        products.length > 0 && products.map(product => <Product key={product._id} product={product} />)
                                    }

                                </div>
                            </div>
                        </>
                    )
            }

        </div>
    );
};

export default Home;