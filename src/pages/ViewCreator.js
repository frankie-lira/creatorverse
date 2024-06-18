import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const ViewCreator = ({ creators }) => {
  const { id } = useParams();
  const creator = creators.find((creator) => creator.id === parseInt(id));

  return (
    <div className="view-creator">
      {creator ? (
        <Card 
          name={creator.name} 
          url={creator.url} 
          description={creator.description} 
          imageURL={creator.imageURL}
        />
      ) : (
        <p>Creator not found</p>
      )}
    </div>
  );
};

export default ViewCreator;
