import React from 'react'

function Booklist() {
    const books = [
        {
          title: 'The Alchemist',
          author: 'Paulo Coelho',
          genre: 'Fiction'
        },
        {
          title: 'The Lean Startup',
          author: 'Eric Ries',
          genre: 'Business'
        },
        {
          title: 'The Design of Everyday Things',
          author: 'Don Norman',
          genre: 'Design'
        }
      ];
    
  return (
    <div>
        <h1>Book List</h1>
      {books.map((book) => (
        <div key={book.title}>
          <h2>Title: {book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
        </div>
      ))}
    </div>
  )
}

export default Booklist