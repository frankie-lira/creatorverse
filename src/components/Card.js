import React from 'react';
import '../Card.css';
import ViewCreator from '../pages/ViewCreator';

const Card = ({ name, url, description, imageURL }) => {
  return (
    <div className="card">
      <img src={imageURL} alt={`${name}'s image`} className="card-image" />
      <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <p className="card-description">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">Visit Profile</a>
      </div>
    </div>
  );
};

export default Card;
