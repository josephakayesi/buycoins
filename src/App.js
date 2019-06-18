import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import NewsFeedList from './components/NewsFeedList/NewsFeedList'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="container">
      <Navbar />
      <NewsFeedList />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
