import React from 'react'
import './HomePage.css'
import Content from './Content/Content'
import ExploreButton from './ExploreButton/ExploreButton'

const HomePage = (props) => {
  const handleExploreClick = () => {
    props.setSelectedCategory(1); 
  };
  return (
    <div className="home-page">
    <Content />
    <ExploreButton handleExploreClick={handleExploreClick} />
  </div>
  )
}

export default HomePage