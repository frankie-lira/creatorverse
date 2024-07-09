import React, { useState } from 'react';
import supabase from '../client';
import '../styles/AddCreator.css';

const AddCreator = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase.from('creators').insert([
        { name, url, description, imageURL },
      ]);
      if (error) {
        throw error;
      }
      console.log('New content creator added:', data);
      // Optionally, you can redirect the user to another page after successful submission
      // history.push('/');
    } catch (error) {
      console.error('Error adding content creator:', error.message);
    }
  };

  return (
    <div className="add-creator">
      <h2>Add New Content Creator</h2>
      <form onSubmit={handleSubmit} className="add-creator-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="url">URL:</label>
          <input type="url" id="url" value={url} onChange={(e) => setUrl(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="imageURL">Image URL (Optional):</label>
          <input type="url" id="imageURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
        </div>
        <button type="submit" className="submit-button">Add Creator</button>
      </form>
    </div>
  );
};

export default AddCreator;
