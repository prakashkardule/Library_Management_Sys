import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = () => {
    axios.get(`http://localhost:8080/api/books?search=${search}`)
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the books!", error);
      });
  };

  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookSearch;
