// src/pages/Podcast.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShow } from '../api';
import SeasonList from '../components/SeasonList';

const Podcast = () => {
    const { id } = useParams();
    const [podcast, setPodcast] = useState(null);

    useEffect(() => {
        fetchShow(id).then(response => setPodcast(response.data));
    }, [id]);

    if (!podcast) return <div>Loading...</div>;

    return (
        <div>
            <h1>{podcast.title}</h1>
            <p>{podcast.description}</p>
            <SeasonList seasons={podcast.seasons} />
        </div>
    );
};

export default Podcast;
