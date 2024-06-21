// src/components/SeasonDetails.js
import React, { useState } from 'react';
import EpisodeList from './EpisodeList';

const SeasonDetails = ({ season }) => {
    const [showEpisodes, setShowEpisodes] = useState(false);

    return (
        <div>
            <h4 onClick={() => setShowEpisodes(!showEpisodes)}>
                {season.title} ({season.episodeCount} episodes)
            </h4>
            {showEpisodes && <EpisodeList seasonId={season.id} />}
        </div>
    );
};

export default SeasonDetails;
