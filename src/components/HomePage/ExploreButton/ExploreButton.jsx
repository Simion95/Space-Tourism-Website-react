import React from 'react';
import './ExploreButton.css'

const ExploreButton = (props) => {
  return (
    <div className="explore-button-container">
      <button className="explore-button">EXPLORE</button>
      <div onClick={props.handleExploreClick} className="blur-circle"></div>
    </div>
  );
}

export default ExploreButton;
