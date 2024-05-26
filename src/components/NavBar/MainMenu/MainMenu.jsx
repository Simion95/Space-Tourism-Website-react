import React, { useEffect } from 'react';
import './MainMenu.css';

const MainMenu = (props) => {
  const items = ['00 HOME', '01 DESTINATION', '02 CREW', '03 TECHNOLOGY'];

  const handleClick = (index) => {
    props.setSelectedCategory(index);
  };

  useEffect(() => {
    console.log(props.selectedCategory);
  }, [props.selectedCategory]);

  return (
    <div className={`main-menu ${props.menuVisible ? 'active' : ''}`}>
      {items.map((item, index) => {
        const parts = item.split(' ');
        return (
          <div key={index} className={`mini-container ${props.selectedCategory === index ? 'selected' : ''}`} onClick={() => handleClick(index)}>
            <div>{parts[0]}</div>
            <div>{parts[1]}</div>
            <div className={`mini-rectangle ${props.selectedCategory === index ? 'visible' : ''}`}></div>
          </div>
        );
      })}
    </div>
  );
};

export default MainMenu;
