import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../Header/Header';

const Checkout = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://apple-pudding-32420.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error))
    }, [id]);

    sessionStorage.setItem('productId', product._id);

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="mt-5 mb-5 centerText">Cart</h3>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product?.name}</td>
                                    <td>1</td>
                                    <td>${product?.price}</td>
                                </tr>

                                <tr style={{ border: '1px solid transparent' }}>
                                    <td colSpan="3"><strong>Total</strong></td>
                                    <td><strong>${product?.price}</strong></td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="d-flex justify-content-end pe-0">
                            <Link to="/checkout"><button className="btn btn-primary site-btn" >Checkout</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;