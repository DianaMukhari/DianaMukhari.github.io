// src/components/EpisodeList.js
import React from 'react';
import EpisodePlayer from '.Components/EpisodePlayer';

const EpisodeList = ({ episodes }) => {
    return (
        <ul>
            {episodes.map(episode => (
                <li key={episode.id}>
                    <h3>{episode.title}</h3>
                    <EpisodePlayer file={episode.file} />
                </li>
            ))}
        </ul>
    );
};

export default EpisodeList;
