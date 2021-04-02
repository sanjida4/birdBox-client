import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';


const ManageBook = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://apple-pudding-32420.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }, []);

    const handleDeleteProduct = id => {
        fetch(`https://apple-pudding-32420.herokuapp.com/product/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.response) {
                    alert('Deleted Successfully');
                    const remainingProducts = products.filter((product) => product._id !== id);
                    setProducts(remainingProducts);
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="container-fluid admin-height" style={{ height: '100vh' }}>
            <div className="row" style={{ color: '#fff', textAlign: 'center', height: '100%' }}>

                <Header />

                <div className="col-md-9 col-sm-12 pe-0 ps-0">
                    <div className="card mb-3 admin-card">
                        <div className="card-header pb-4 pt-4 ps-5">Manage</div>
                        <div className="card-body text-dark">

                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.length > 0 && products.map((product, index) => {
                                            return (
                                                <tr key={product._id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{product?.name}</td>
                                                    <td>{product?.price}</td>
                                                    <td>
                                                        <span onClick={() => handleDeleteProduct(product._id)} style={{ cursor: 'pointer', color: 'red' }}>Delete</span>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ManageBook;