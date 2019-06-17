import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import NewsFeed from './components/NewsFeed/NewsFeed'

function App() {
  return (
    <div className="container">
      <Navbar />
      <NewsFeed />
    </div>
  );
}

export default App;
