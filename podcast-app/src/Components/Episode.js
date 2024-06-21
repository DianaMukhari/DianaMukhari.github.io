// src/components/Episode.js

import React from 'react';

const Episode = ({ episode, playEpisode, addToFavourites }) => {
    return (
        <li>
            <h4>{episode.title}</h4>
            <button onClick={() => playEpisode(episode)}>Play</button>
            <button onClick={() => addToFavourites(episode)}>Add to Favourites</button>
        </li>
    );
};

export default Episode;
