import React, { useState } from 'react'; // Import React and the useState hook from the react package
import supabase from '../client'; // Import the configured Supabase client from a local file
import '../styles/AddCreator.css'; // Import CSS file for styling the component

// Define the AddCreator functional component
const AddCreator = () => {
  // Declare state variables for the form fields and UI state
  const [name, setName] = useState(''); // State for the name field
  const [url, setUrl] = useState(''); // State for the URL field
  const [description, setDescription] = useState(''); // State for the description field
  const [imageURL, setImageURL] = useState(''); // State for the image URL field
  const [isLoading, setIsLoading] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State for error messages
  const [success, setSuccess] = useState(null); // State for success messages

  // Event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous error messages
    setSuccess(null); // Clear any previous success messages

    try {
      // Insert a new row into the 'creators' table using Supabase
      const { data, error } = await supabase.from('creators').insert([
        { name, url, description, imageURL }, // Insert the form data
      ]);
      if (error) {
        throw error; // Throw error if the insert operation fails
      }
      setSuccess('New content creator added successfully!'); // Set success message
      // Clear the form fields
      setName('');
      setUrl('');
      setDescription('');
      setImageURL('');
    } catch (error) {
      setError('Error adding content creator: ' + error.message); // Set error message
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="add-creator">
      <h2>Add New Content Creator</h2>
      {error && <p className="error">{error}</p> //Display error message if any
      }
      {success && <p className="success">{success}</p> //Display success message if any
      } 
      <form onSubmit={handleSubmit} className="add-creator-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} // Update name state on input change
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="url">URL:</label>
          <input 
            type="url" 
            id="url" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} // Update URL state on input change
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} // Update description state on input change
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageURL">Image URL (Optional):</label>
          <input 
            type="url" 
            id="imageURL" 
            value={imageURL} 
            onChange={(e) => setImageURL(e.target.value)} // Update image URL state on input change
          />
        </div>
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add Creator'// Display different text based on loading state 
          } 
        </button>
      </form>
    </div>
  );
};

export default AddCreator; // Export the AddCreator component
