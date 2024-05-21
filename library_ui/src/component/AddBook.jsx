import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = { title, author, description };

    axios.post('http://localhost:8080/api/books', newBook)
      .then(response => {
        console.log(response.data);
        navigate('/');
      })
      .catch(error => {
        console.error("There was an error adding the book!", error);
      });
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-md-6">
        <h1 className='mt-5'>Add Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input 
              type="text" 
              className="form-control" 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Author:</label>
            <input 
              type="text" 
              className="form-control" 
              onChange={(e) => setAuthor(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea 
              className="form-control" 
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-2">Save</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
