// src/Pages/Home.js
import React, { useEffect, useState } from 'react';
import { fetchShows } from '../api'; // Correct import

const Home = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getShows = async () => {
      try {
        const response = await fetchShows();
        setShows(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    getShows();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>All Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <h2>{show.title}</h2>
            <img src={show.image} alt={show.title} style={{ width: '200px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
