import React from 'react';
import "../index.css"; // Example CSS file for styling PodcastCard
import '../App.css';

const PodcastCard = ({ podcast }) => {
    return (
        <div className="podcast-card">
            <img src={podcast.image} alt={podcast.title} className="podcast-image" />
            <div className="podcast-info">
                <h3 className="podcast-title">{podcast.title}</h3>
                {/* Add more information like genres, seasons, etc. */}
            </div>
        </div>
    );
};

export default PodcastCard;
