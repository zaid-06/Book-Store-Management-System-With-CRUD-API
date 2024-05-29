// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const App = () => {
// //   const [books, setBooks] = useState([]);

// //   useEffect(() => {
// //     // Fetch books data on initial render
// //     const fetchBooks = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:9010/books');
// //         setBooks(response.data);
// //       } catch (error) {
// //         console.error('Error fetching books:', error);
// //       }
// //     };
  

// //     fetchBooks();
// //   }, []); // Empty dependency array means this effect runs only once after the initial render

// //   return (
    
// //     <div>
// //       <h1>Book Store</h1>
// //       <ul>
// //         {books.map(book => (
// //           <li key={book.id}>
// //             {book.title} by {book.author}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default App;
// // src/App.js
// import React, { useEffect, useState } from 'react';
// import { getBooks, createBook, updateBook, deleteBook } from './services/api';

// const App = () => {
//   const [books, setBooks] = useState([]);
//   const [form, setForm] = useState({ ID: '', name: '', author: '', publication: '' });

//   useEffect(() => {
//     fetchBooks();
//   }, []); 

//   const fetchBooks = async () => {
//     try {

//       const response = await getBooks();
//       setBooks(response.data);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({ ...prevForm, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (form.ID) {
//       await updateBook(form.ID, { name: form.name, author: form.author , publication: form.publication});
//     } else {
//       await createBook({ name: form.name, author: form.author , publication: form.publication});
//     }
//     setForm({ ID: '', name: '', author: '', publication: '' });
//     fetchBooks();
//   };

//   const handleEdit = (book) => {
//     setForm(book);
//   };

//   const handleDelete = async (ID) => {
//     await deleteBook(ID);
//     fetchBooks();
//   };

//   return (
//     <div>
//       <h1>Book Store</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="author"
//           placeholder="Author"
//           value={form.author}
//           onChange={handleChange} 
//         />
//          <input
//           type="text"
//           name="publication"
//           placeholder="Publication"
//           value={form.publication}
//           onChange={handleChange}
//         />

//         <button type="submit">{form.ID ? 'Update' : 'Create'}</button>
//       </form>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>
//             id: {book.ID} name: {book.name} by: {book.author} pub: {book.publication} 
//             <button onClick={() => handleEdit(book)}>Edit</button>
//             <button onClick={() => handleDelete(book.ID)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default App;

import React, { useEffect, useState } from 'react';
import { getBooks, createBook, updateBook, deleteBook } from './services/api';

const App = () => {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ ID: '', name: '', author: '', publication: '' });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.ID) {
      await updateBook(form.ID, { name: form.name, author: form.author, publication: form.publication });
    } else {
      await createBook({ name: form.name, author: form.author, publication: form.publication });
    }
    setForm({ ID: '', name: '', author: '', publication: '' });
    fetchBooks();
  };

  const handleEdit = (book) => {
    setForm(book);
  };

  const handleDelete = async (ID) => {
    try {
      await deleteBook(ID);
      fetchBooks();
    } catch (error) {
      console.error(`Error deleting book with ID ${ID}:`, error);
    }
  };

  const Style = {
    
    // padding: '7rem 1rem',
    // borderRadius: '0.3rem',
    // Highlight: '0.3rem',
    // margin: '1rem 0',
  };

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Book Store</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    <div style={{ backgroundColor: '#e9ecef', minHeight: '100vh', padding: '20px' }}>

    <div style={Style}>
      {/* <h1>Book Store</h1> */}
      <div className='px-4' >
 
      

<form onSubmit={handleSubmit} className='p-md-5'>
  <div class="row mb-3">
    <label  class="col-sm-2 col-form-label">B Name</label>
    <div class="col-sm-10">
      <input 
      className="form-control" 
      type="text"
      name="name"
      placeholder="Name"
      value={form.name}
      onChange={handleChange}
      />
      
    </div>
  </div>
  <div class="row mb-3">
    <label class="col-sm-2 col-form-label">Author</label>
    <div class="col-sm-10">
      <input 
       type="text"
       name="author"
       placeholder="Author"
       value={form.author}
       onChange={handleChange}
      className="form-control"  
     />
    </div>
  </div>
  <div class="row mb-3">
    <label  class="col-sm-2 col-form-label">Publication</label>
    <div class="col-sm-10">
      <input 
         name="publication"
         placeholder="Publication"
         value={form.publication}
         onChange={handleChange} 
         type="text" class="form-control" 
      />
    </div>  
  </div>
  
  
  <button type="submit"  class="btn btn-primary ">{form.ID ? 'Update' : 'Create'} </button>
</form>

      <div className=' p-md-5 bg-dark text-white   rounded'>
<h3>Book list</h3>
<ul className="list-group mt-4">
        {books.map((book) => (
          <li key={book.ID} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              
              <span className="ms-3"><strong>Name:</strong> {book.name}</span>
              <span className="ms-3"><strong>By:</strong> {book.author}</span>
              <span className="ms-3"><strong>Pub:</strong> {book.publication}</span>
            </div>
            <div>
              <button onClick={() => handleEdit(book)} className="btn btn-secondary ms-2">Edit</button>
              <button onClick={() => handleDelete(book.ID)} className="btn btn-danger ms-2">Delete</button>
            </div>
          </li>
        ))}
      </ul>
      </div>
      


      </div>
      
    </div>
    </div>
    </>
  );
};

export default App;
