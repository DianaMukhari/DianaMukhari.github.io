// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { fetchPreviews } from '../api';
import PodcastList from '../components/PodcastList';

const Home = () => {
    const [previews, setPreviews] = useState([]);

    useEffect(() => {
        fetchPreviews().then(response => setPreviews(response.data));
    }, []);

    return (
        <div>
            <h1>Podcast Previews</h1>
            <PodcastList previews={previews} />
        </div>
    );
};

export default Home;
