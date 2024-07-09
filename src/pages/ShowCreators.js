import React from 'react';
import Card from '../components/Card';
import '../ShowCreators.css';

const ShowCreators = ({ creators }) => {
  return (
    <div className="show-creators">
      {creators.map((creator) => (
        <Card 
          key={creator.id} 
          id={creator.id} 
          name={creator.name} 
          description={creator.description} 
          imageURL={creator.imageURL} 
        />
      ))}
    </div>
  );
};

export default ShowCreators;
