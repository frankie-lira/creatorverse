import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ViewCreator.css';

const ViewCreator = ({ creators }) => {
  const { id } = useParams();
  const creator = creators.find((creator) => creator.id === parseInt(id, 10));

  return (
    <div className="view-creator">
      {creator ? (
        <div className="creator-details">
          <img src={creator.imageURL} alt={`${creator.name}'s image`} className="creator-image" />
          <div className="creator-info">
            <h1 className="creator-name">{creator.name}</h1>
            <p className="creator-id"><strong>ID:</strong> {creator.id}</p>
            <p className="creator-description"><strong>Description:</strong> {creator.description}</p>
            <p className="creator-url">
              <strong>Profile URL:</strong> 
              <a href={creator.url} target="_blank" rel="noopener noreferrer">{creator.url}</a>
            </p>
            <Link to={`/editcreator/${id}`} className="edit-button">Edit Profile</Link>
          </div>
        </div>
      ) : (
        <p>Creator not found</p>
      )}
    </div>
  );
};

export default ViewCreator;
