import React from 'react';
import Card from '../components/Card';
import '../ShowCreators.css';

const ShowCreators = ({ creators }) => {
  return (
    <div className="show-creators">
      {creators.length > 0 ? (
        creators.map((creator) => (
          <Card 
            key={creator.id} 
            name={creator.name} 
            url={creator.url} 
            description={creator.description} 
            imageURL={creator.imageURL}
          />
        ))
      ) : (
        <p className="no-creators">No content creators found.</p>
      )}
    </div>
  );
};

export default ShowCreators;
