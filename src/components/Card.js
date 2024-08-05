import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import '../styles/Card.css';

const Card = ({ id, name, description, imageURL }) => {
  return (
    <div className="card">
      <img src={imageURL} alt={`${name}'s image`} className="card-image" />
      <div className="card-info">
        <div className="card-header">
          <h3 className="card-name">{name}</h3>
          <div className="button-container">
            <Link to={`/viewcreator/${id}`} className="visit-profile-button">Visit Profile</Link>
            <Link to={`/editcreator/${id}`} className="edit-button">
              <FontAwesomeIcon icon={faPen} />
            </Link>
          </div>
        </div>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
