import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/books/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the book!", error);
      });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/api/books/${id}`, book)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error("There was an error updating the book!", error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Edit Book</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={book.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Author</label>
              <input
                type="text"
                name="author"
                className="form-control"
                value={book.author}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                className="form-control"
                value={book.description}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Update Book</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
