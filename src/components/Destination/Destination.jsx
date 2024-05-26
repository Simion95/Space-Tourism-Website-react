import React, { useState } from 'react';
import './Destination.css';
import moonImage from '../../assets/destination/image-moon.png'
import marsImage from '../../assets/destination/image-mars.png'
import europaImage from '../../assets/destination/image-europa.png'
import titanImage from '../../assets/destination/image-titan.png'


const Destination = props => {
  const images = {
    Moon: moonImage,
    Mars: marsImage,
    Europa: europaImage,
    Titan: titanImage
  };

  const [selectedDestination, setSelectedDestination] = useState(props.destinations[0]);

  const showDestinationDetails = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <>
    <div className='both-sides'>
    <div className='left-side'>
    <div className='flex-header'>
      <div className='header-title'>
        <h5>01</h5>
        <h5>PICK YOUR DESTINATION</h5>
      </div>
      </div>
        <div className='container-destination'>
        <img className='planet-image' src={images[selectedDestination.name]} alt={selectedDestination.name} />
    </div>
        </div>
      <div className='right-side'>
      <ul className="destination-list">
        {props.destinations.map((destination, index) => (
          <li key={index} 
          onClick={() => showDestinationDetails(destination)}
          className={selectedDestination === destination ? 'selected' : ''}>
            {destination.name.toUpperCase()}
          </li>
        ))}
      </ul>
      {selectedDestination && (
        <div className="destination-details">
          <h2>{selectedDestination.name.toUpperCase()}</h2>
          <p>{selectedDestination.description}</p>
          <div className='rectangle-separator'></div>
          <div className="details-border">
          <div className="detail-item">
              <h5>AVG. DISTANCE</h5>
              <h3>{selectedDestination.distance.toUpperCase()}</h3>
            </div>
            <div className="detail-item">
              <h5>EST. TRAVEL TIME</h5>
              <h3>{selectedDestination.travel.toUpperCase()}</h3>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
    </>
  );
}

export default Destination;
