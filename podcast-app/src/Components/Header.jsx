import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Header = ({ onFavoritesClick }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <nav className="nav-links">
        <class buttons>
        <button className="favorites-button" onClick={onFavoritesClick}>Favorites</button>
        <button className="Home-button" onClick={handleHomeClick}>Home</button>      
        </class>
        </nav>
    </header>
  );
};

export default Header;
