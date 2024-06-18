// src/pages/Genre.js
import React, { useEffect, useState } from 'react';
import { fetchGenre } from '../api';
import GenreList from '../components/GenreList';

const genres = [
    { id: 1, title: 'Personal Growth' },
    { id: 2, title: 'Investigative Journalism' },
    // Add other genres here
];

const Genre = () => {
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [podcasts, setPodcasts] = useState([]);

    const handleGenreClick = (genreId) => {
        fetchGenre(genreId).then(response => {
            setPodcasts(response.data.showIds);
            setSelectedGenre(genres.find(genre => genre.id === genreId));
        });
    };

    return (
        <div>
            <h1>Genres</h1>
            <GenreList genres={genres} onGenreClick={handleGenreClick} />
            <h2>{selectedGenre?.title}</h2>
            <PodcastList previews={podcasts} />
        </div>
    );
};

export default Genre;
