import React from 'react';
import { useParams } from 'react-router-dom';

const EditCreator = ({ creators, updateCreator }) => {
  const { id } = useParams();
  const creator = creators.find((creator) => creator.id === parseInt(id));

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedCreator = {
      id: creator.id,
      name: event.target.name.value,
      url: event.target.url.value,
      description: event.target.description.value,
      imageURL: event.target.imageURL.value,
    };
    updateCreator(updatedCreator);
  };

  return (
    <div className="edit-creator">
      {creator ? (
        <form onSubmit={handleSubmit}>
          <input name="name" defaultValue={creator.name} />
          <input name="url" defaultValue={creator.url} />
          <input name="description" defaultValue={creator.description} />
          <input name="imageURL" defaultValue={creator.imageURL} />
          <button type="submit">Update Creator</button>
        </form>
      ) : (
        <p>Creator not found</p>
      )}
    </div>
  );
};

export default EditCreator;
