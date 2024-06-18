// src/components/GenreList.js
import React from 'react';

const GenreList = ({ genres, onGenreClick }) => {
    return (
        <ul>
            {genres.map(genre => (
                <li key={genre.id}>
                    <button onClick={() => onGenreClick(genre.id)}>
                        {genre.title}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default GenreList;
