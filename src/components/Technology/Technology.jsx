import React, { useState, useEffect } from 'react';
import './Technology.css';

import launchVehicleLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import launchVehiclePortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg';
import spaceCapsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg';
import spaceportLandscape from '../../assets/technology/image-spaceport-landscape.jpg';
import spaceportPortrait from '../../assets/technology/image-spaceport-portrait.jpg';

const Technology = (props) => {
  const images = {
    'Launch vehicle': {
      landscape: launchVehicleLandscape,
      portrait: launchVehiclePortrait
    },
    'Space capsule': {
      landscape: spaceCapsuleLandscape,
      portrait: spaceCapsulePortrait
    },
    'Spaceport': {
      landscape: spaceportLandscape,
      portrait: spaceportPortrait
    }
  };

  const [selectedTechnology, setSelectedTechnology] = useState(null);

  useEffect(() => {
    if (props.technology && props.technology.length > 0) {
      setSelectedTechnology(props.technology[0]);
    }
  }, [props.technology]);

  const showTechnologyDetails = (technology) => {
    setSelectedTechnology(technology);
  };

  if (!selectedTechnology) {
    return <div>Loading...</div>;
  }

  const technologyImages = images[selectedTechnology.name];

  return (
    <div className='container-technology'>
      <div className='flex-header'>
      <div className='header-title'>
        <h5>03</h5>
        <h5>SPACE LAUNCH 101</h5>
      </div>
      </div>
      <div className='subcontainer-technology'>

      <div className='technology-image'>
        {technologyImages && (
          <>
            <img 
              src={technologyImages.landscape} 
              alt={selectedTechnology.name} 
              className='landscape'
            />
            <img 
              src={technologyImages.portrait} 
              alt={selectedTechnology.name} 
              className='portrait'
            />
          </>
        )}
      </div>
      <div className='side-technology'>
      <div className='technology-selector'>
        {props.technology.map((technology, index) => (
          <button 
            key={index}
            onClick={() => showTechnologyDetails(technology)}
            className={selectedTechnology === technology ? 'selected' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className='technology-details'>
        <div className='technology-info'>
          <h5>THE TERMINOLOGY...</h5>
          <h3>{selectedTechnology.name.toUpperCase()}</h3>
          <p>{selectedTechnology.description}</p>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Technology;
