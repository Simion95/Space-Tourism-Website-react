import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';
import data from './data/data.json';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const getBackgroundClass = (category) => {
    switch (category) {
      case 0:
        return 'background-home';
      case 1:
        return 'background-destination';
      case 2:
        return 'background-crew';
      case 3:
        return 'background-technology';
      default:
        return '';
    }
  };
  return (
    <>
      <div className={`container ${getBackgroundClass(selectedCategory)}`}>

 <NavBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        {selectedCategory === 0 && <HomePage setSelectedCategory={setSelectedCategory} />}
        {selectedCategory === 1 && <Destination destinations={data.destinations} />}
        {selectedCategory === 2 && <Crew crew={data.crew} />}
        {selectedCategory === 3 && <Technology technology={data.technology} />}
    </div>
    </>
  );
}

export default App;