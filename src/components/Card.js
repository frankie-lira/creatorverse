import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ id, name, description, imageURL }) => {
  return (
    <div className="card">
      <img src={imageURL} alt={`${name}'s image`} className="card-image" />
      <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <p className="card-description">{description}</p>
        <p className="id-check">{id}</p>
        <Link to={`/viewcreator/${id}`} className="card-link">Visit Profile</Link>
        <Link to={`/editcreator/${id}`} className="edit-button">Edit</Link>
      </div>
    </div>
  );
};

export default Card;
