import React, { useState } from 'react';
import './Crew.css';

import douglas from '../../assets/crew/image-douglas-hurley.png';
import ansari from '../../assets/crew/image-anousheh-ansari.png';
import mark from '../../assets/crew/image-mark-shuttleworth.png';
import victor from '../../assets/crew/image-victor-glover.png';

const Crew = (props) => {
  const images = {
    'Douglas Hurley': douglas,
    'Anousheh Ansari': ansari,
    'Mark Shuttleworth': mark,
    'Victor Glover': victor
  };

  const [selectedCrew, setSelectedCrew] = useState(props.crew[0]);

  const showCrewDetails = (crewMember) => {
    setSelectedCrew(crewMember);
  };

  return (
    <div className='container-crew'>
      <div className='flex-header'>
      <div className='header-title'>
        <h5>02</h5>
        <h5>MEET YOUR CREW</h5>
      </div>
      </div>
      
        <div className='crew-info'>
       <div className='crew-picture'>
          <img className='crew-image'  src={images[selectedCrew.name]} alt={selectedCrew.name} />
       </div>
          <div className='rectangle-separator-crew'></div>
        <div className='crew-side'>

      <div className='crew-selector'>
        {props.crew.map((crewMember, index) => (
          <button 
            key={index}
            onClick={() => showCrewDetails(crewMember)}
            className={selectedCrew === crewMember ? 'selected' : ''}
          >
            <span className='dot'></span>
          </button>
        ))}
      </div>
        <div className='crew-details'>
          <h5>{selectedCrew.role.toUpperCase()}</h5>
          <h3>{selectedCrew.name.toUpperCase()}</h3>
          <p>{selectedCrew.bio}</p>
        </div>
        </div>
        </div>
     

    </div>
  );
}

export default Crew;
