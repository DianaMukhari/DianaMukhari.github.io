import React from 'react';
import '../App.css';
const EpisodePlayer = ({ episode }) => (
  <div>
    <h3>{episode.title}</h3>
    <audio controls>
      <source src="/path/to/placeholder/audio.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
);

export default EpisodePlayer;
