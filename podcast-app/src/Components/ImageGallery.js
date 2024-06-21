import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPreviews } from '../api';
import Favorites from './Favorites'; // Adjust the import path if necessary

const ImageGallery = ({ toggleFavorite, favorites }) => {
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPreviews();
        setPreviews(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul style={styles.galleryContainer}>
      {previews.map(podcast => {
        const isFavorite = favorites && favorites.some(fav => fav.id === podcast.id);

        return (
          <li key={podcast.id} style={styles.imageContainer}>
            <Link to={`/podcast/${podcast.id}`}>
              <img
                src={podcast.image}
                alt={podcast.title}
                style={styles.image}
                onError={(e) => { e.target.src = 'path/to/placeholder/image.png'; }}
              />
              <h3>{podcast.title}</h3>
            </Link>
            <button onClick={() => toggleFavorite(podcast)}>
              {isFavorite ? '❌' : '❤️'
}
            </button>

          </li>
        );
      })}
    </ul>
  );
};

const styles = {
  galleryContainer: {
    listStyleType: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  },
  imageContainer: {
    textAlign: 'center',
    width: '200px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default ImageGallery;
