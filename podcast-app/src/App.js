import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PodcastList from "./Components/PodcastList";
import PodcastDetailsPage from "./Components/PodcastDetailsPage";
import FavoritesModal from "./Components/FavoritesModal";
import "./App.css";

const App = () => {
  const [episodes, setEpisodes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);

  // Load episodes and favorites from localStorage on app start
  useEffect(() => {
    const storedEpisodes = JSON.parse(localStorage.getItem("episodes")) || [];
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setEpisodes(storedEpisodes);
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (episode) => {
    const updatedFavorites = [...favorites, episode];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Function to remove an episode from favorites
  const removeFavorite = (episodeId) => {
    console.log(favorites);
    const updatedFavorites = favorites.filter(
      (episode) => episode.episode !== episodeId
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Function to reset listening history
  const resetListeningHistory = () => {
    const resetEpisodes = episodes.map((episode) => ({
      ...episode,
      listened: false,
    }));
    setEpisodes(resetEpisodes);
    localStorage.removeItem("episodes");
  };

  // Function to clear all favorites
  const clearFavorites = () => {
    setFavorites([]);
  };

  const toggleFavoritesModal = () => {
    setIsFavoritesModalOpen(!isFavoritesModalOpen);
  };

  return (
    <Router>
      <Header onFavoritesClick={toggleFavoritesModal} />
      <Routes>
        <Route
          path="/"
          element={<PodcastList addToFavorites={addToFavorites} />}
        />
        <Route
          path="/id/:id"
          element={<PodcastDetailsPage addToFavorites={addToFavorites} />}
        />
      </Routes>
      <Footer />
      <FavoritesModal
        isOpen={isFavoritesModalOpen}
        onClose={toggleFavoritesModal}
        favorites={favorites}
        removeFavorite={removeFavorite}
        clearFavorites={clearFavorites}
      />
    </Router>
  );
};

export default App;