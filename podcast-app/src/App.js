import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '.Components/pages/Home';
//import About from './Components/Pages/Genre';
//import Dashboard from './Components/Pages/Podcast';
import Podcast from './Components/Pages/Podcast';
import Genre from './Components/Pages/Genre';
//import User from './User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Genre />} />
        <Route path="/dashboard" element={<Podcast/>}>
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
