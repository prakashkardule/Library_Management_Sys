import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(3);
//   const [pageSized, setPageSized] = useState(2);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/books?page=${page}&size=${pageSize}`)
      .then(response => {
        // console.log(response.data);
        setBooks(response.data.content);
        setTotalPages(response.data.totalPages);
      })
      .catch(error => {
        console.error("There was an error fetching the books!", error);
      });
  }, [page, pageSize]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/books/${id}`)
      .then(() => {
        axios.get(`http://localhost:8080/api/books?page=${page}&size=${pageSize}`)
        .then(response => {
          // console.log(response.data);
          setBooks(response.data.content);
          setTotalPages(response.data.totalPages);
        })
        .catch(error => {
          console.error("There was an error fetching the books!", error);
        });
        // setBooks(books.filter(book => book.id !== id));
      })
      .catch(error => {
        console.error("There was an error deleting the book!", error);
      });
  };

  const handleEdit = (id) => {
    navigate(`/edit-book/${id}`);
  };

  const handleAdd = ()=>{
    navigate(`/add-book`);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

const handleNextPage = () => {
    if (page < totalPages - 1) {
        setPage(page + 1);
    }
};

const handlePrevPage = () => {
    if (page > 0) {
        setPage(page - 1);
    }
};

  return (
    <div className="container mt-5 ">
      <h2>Book List</h2>
      <div className="d-flex justify-content-between align-items-center">
        <input
                  type="text"
                  className="form-control"
                  style={{ width: '200px', marginLeft:1100 }}
                  placeholder="Search Book..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                 />
              </div>

              <button
                  className="btn btn-primary mr-2 mb-3"
                  onClick={() => handleAdd()}
                >
                  Add Book
                </button>
      <table className="table table-bordered">
        <thead className="thead-dark">
        
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>
              
                <span>Actions</span>
               
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.description}</td>
              <td>
                <button
                  className="btn btn-primary mx-3"
                  onClick={() => handleEdit(book.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between">
                <div>
                    Showing page {page + 1} of {totalPages}
                </div>
                <div>
                    <button className="btn btn-primary" onClick={handlePrevPage}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className="btn btn-primary mx-2" onClick={handleNextPage}>
                    <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                   
                </div>
            </div>

    </div>
  );
};

export default AllBooks;
