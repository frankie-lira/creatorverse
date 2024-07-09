import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import supabase from '../client';
import '../styles/EditCreator.css';

const EditCreator = ({ creators, setCreators }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const creator = creators.find((creator) => creator.id === parseInt(id, 10));

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (creator) {
      setName(creator.name);
      setDescription(creator.description);
      setImageURL(creator.imageURL);
      setUrl(creator.url);
    }
  }, [creator]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('creators')
      .update({ name, description, imageURL, url })
      .eq('id', id);

    if (error) {
      console.error('Error updating data:', error.message);
    } else {
      const updatedCreators = creators.map((creator) =>
        creator.id === parseInt(id, 10) ? { ...creator, name, description, imageURL, url } : creator
      );
      setCreators(updatedCreators);
      navigate(`/viewcreator/${id}`);
    }
  };

  return (
    <div className="edit-creator-container">
      <h2>Edit Creator</h2>
      <form className="edit-creator-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageURL">Image URL:</label>
          <input 
            type="text" 
            id="imageURL" 
            value={imageURL} 
            onChange={(e) => setImageURL(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="url">Profile URL:</label>
          <input 
            type="text" 
            id="url" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="submit-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditCreator;
