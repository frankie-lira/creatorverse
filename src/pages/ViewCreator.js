import React from 'react';
import { useParams } from 'react-router-dom';

const ViewCreator = ({ creators }) => {
  const { id } = useParams();
  const creator = creators.find((creator) => creator.id === parseInt(id, 10));

  return (
    <div className="view-creator">
      {creator ? (
        <div className="creator-details">
          <img src={creator.imageURL} alt={`${creator.name}'s image`} className="creator-image" />
          <h1>{creator.name}</h1>
          <p><strong>ID:</strong> {creator.id}</p>
          <p><strong>Description:</strong> {creator.description}</p>
        </div>
      ) : (
        <p>Creator not found</p>
      )}
    </div>
  );
};

export default ViewCreator;
