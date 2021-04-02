import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";

const Checkout = () => {
    let history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useContext(UserContext);
    const productId = sessionStorage.getItem('productId');
    const [product, setProduct] = useState({});
    const { register, handleSubmit, errors } = useForm();

    const proceedCheckout = data => {
        const orderData = { ...data, product: { ...product }, orderTime: new Date() }
        fetch('https://apple-pudding-44312.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.response) {
                    alert('Order placed successfully');
                    sessionStorage.removeItem('productId');
                    history.replace(from);
                }
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetch(`https://apple-pudding-44312.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => {
                data.quantity = 1;
                setProduct(data);
            })
            .catch(error => console.log(error))
    }, [productId]);

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row m-2">
                    <div className="col-md-6 offset-md-3 border mt-5 p-4">

                        <h3 className="text-center  mb-4">Checkout</h3>

                        <form className="add-book-form" onSubmit={handleSubmit(proceedCheckout)}>

                            <div className="row mb-3">
                                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input name="name" type="text" defaultValue={user?.name} ref={register({ required: true })} className="form-control" id="name" />
                                    {errors.name && <span>Name is required</span>}
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input name="email" defaultValue={user?.email} type="email" ref={register({ required: true })} className="form-control" id="email" />
                                    {errors.email && <span>Email is required</span>}
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                                <div className="col-sm-10">
                                    <input name="address" ref={register({ required: true })} type="text" className="form-control" id="address" />
                                    {errors.address && <span>Address is required</span>}
                                </div>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary site-btn">Checkout</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;