import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, _id, price, image } = product;
    return (
        <div className="col-md-4 custom-product mb-4">

            <div className="card single-product">
                <div className="img-wrapper">
                    <img src={image} className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <div className="d-flex bd-highlight mb-3 align-items-center">
                        <div className="me-auto bd-highlight">
                            <h3 className="product-price">{price}</h3>
                        </div>
                        <div className="bd-highlight">
                            <Link to={`/cart/${_id}`}>
                                <button className="site-btn btn btn-primary">Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;