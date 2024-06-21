// src/components/AudioPlayer.js

import React, { useEffect, useState } from 'react';

const AudioPlayer = ({ currentEpisode, playing, stopPlaying }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (playing) {
            const interval = setInterval(() => {
                setProgress(prev => prev + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [playing]);

    if (!currentEpisode) return null;

    return (
        <div className="audio-player">
            <h4>Now Playing: {currentEpisode.title}</h4>
            <p>Progress: {progress}s</p>
            <button onClick={stopPlaying}>Stop</button>
        </div>
    );
};

export default AudioPlayer;
