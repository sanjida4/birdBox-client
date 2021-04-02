import React, { useState } from 'react';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddBook = () => {

    const { register, handleSubmit, errors } = useForm();
    const [image, setImage] = useState(null);

    const uploadImage = (e) => {
        const imageData = new FormData();
        imageData.set('key', 'e6e9802199e92c0f73cb451567a207ec');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImage(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSubmit = (data, e) => {
        data.image = image;
        fetch('https://apple-pudding-44312.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.response) {
                    alert('Item added successfully');
                    e.target.reset();
                }
            })
            .catch(error => console.log(error))
    };

    return (
        <div className="container-fluid admin-height" style={{ height: '100vh' }}>
            <div className="row" style={{ color: '#fff', textAlign: 'center', height: '100%' }}>

                <Header />

                <div className="col-md-9 col-sm-12 pe-0 ps-0">
                    <div className="card mb-3 admin-card">
                        <div className="card-header pb-4 pt-4 ps-5">Add </div>
                        <div className="card-body text-dark">

                            <form className="row g-3 add-book-form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input ref={register({ required: true })} name="name" type="text" className="form-control" id="name" />
                                    {errors.name && <span>This field is required</span>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="price" className="form-label">Add Price</label>
                                    <input ref={register({ required: true })} name="price" type="text" className="form-control" id="price" />
                                    {errors.price && <span>This field is required</span>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="image" className="form-label">Upload Image</label>
                                    <input onChange={uploadImage} name="image" ref={register({ required: true })} type="file" className="form-control" id="image" />
                                    {errors.image && <span>This field is required</span>}
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary site-btn">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;