import React from 'react';
import DishList from './DishList';
import './App.css';  // Ensure your App.css file is correctly imported

import Image from './image.jpg';

const App = () => {
  return (
    <div className="text-gray-300">
      <div className="background">
        <div className="blur-overlay"></div>
        <img src={Image} alt="Background" className="background-image" />
      </div>
      <div className="content">
        <DishList />
      </div>
    </div>
  );
}

export default App;
