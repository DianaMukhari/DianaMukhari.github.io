// src/contexts/FavoritesContext.js
import React, { createContext, useContext, useState } from 'react';
import '../App.css';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (podcast) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some(fav => fav.id === podcast.id)) {
                return prevFavorites.filter(fav => fav.id !== podcast.id);
            } else {
                return [...prevFavorites, podcast];
            }
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);
