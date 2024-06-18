// src/components/PodcastList.js
import React from 'react';
import { Link } from 'react-router-dom';

const PodcastList = ({ previews }) => {
    return (
        <ul>
            {previews.map(podcast => (
                <li key={podcast.id}>
                    <Link to={`/podcast/${podcast.id}`}>
                        <h2>{podcast.title}</h2>
                        <p>{podcast.description}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default PodcastList;
