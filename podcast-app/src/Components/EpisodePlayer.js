// src/components/EpisodePlayer.js
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const EpisodePlayer = ({ file }) => {
    return <ReactAudioPlayer src={file} controls />;
};

export default EpisodePlayer;
