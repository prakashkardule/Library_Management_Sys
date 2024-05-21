
import './App.css';
import AddBook from './component/AddBook';
import AllBooks from './component/AllBooks';
import BookSearch from './component/BookSearch';
import {  BrowserRouter,Route,Routes } from 'react-router-dom';
import EditBook from './component/EditBook';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<AllBooks/>}></Route>
        <Route path="/edit-book/:id" element={<EditBook />} />
        <Route path="/add-book" element={<AddBook />} />
    </Routes>
     </BrowserRouter>
  </div>
  );
}

export default App;
