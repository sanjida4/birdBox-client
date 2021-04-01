import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setimageURL] = useState(null);

    const onSubmit = data => {
        const birdData = {
            name: data.name,
            imageURL: imageURL, 
            price: data.price
        };
        console.log(birdData);
        const url = `http://localhost:5000/addBird`;

        fetch(url, { 
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(birdData)
        })
        .then(res => console.log('server side response'))
    };

    const handleImageUpload = bird => {
        console.log(bird.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'e6e9802199e92c0f73cb451567a207ec');
        imageData.append('image', bird.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setimageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className= "container">
            <h1>Add Birds</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name"><h5>Bird Name</h5></label> <br/>
                <input name="name" defaultValue="Add bird" ref={register} /><br/><br/>

                <label htmlFor="price"><h5>Price</h5></label> <br/>
                <input name="price" defaultValue="$" ref={register} /><br/><br/>

                <label htmlFor="image"><h5>Add Image</h5></label> <br/>
                <input name="image" type="file" onChange={handleImageUpload} />
                <br/> <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Admin;