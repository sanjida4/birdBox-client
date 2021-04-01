import React, { useEffect, useState } from 'react';
import Bird from '../Bird/Bird';

const Home = () => {
    const [birds, setBirds] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/birds')
        .then(res => res.json())
        .then(data => setBirds(data))
    })

    return (
        <div className = "row">
            {
                birds.map(bird => <Bird bird={bird}></Bird>)
            }
        </div>
    );
};

export default Home;