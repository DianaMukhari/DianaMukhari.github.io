// src/components/SeasonList.js
import React from 'react';
import EpisodeList from '.Components/EpisodeList';

const SeasonList = ({ seasons }) => {
    return (
        <div>
            {seasons.map(season => (
                <div key={season.id}>
                    <h2>{season.title}</h2>
                    <img src={season.image} alt={season.title} />
                    <EpisodeList episodes={season.episodes} />
                </div>
            ))}
        </div>
    );
};

export default SeasonList;
