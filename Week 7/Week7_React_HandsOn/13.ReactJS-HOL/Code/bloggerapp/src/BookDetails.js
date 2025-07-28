import React from 'react';

function BookDetails({ books }) {
  return (
    <div>
      <h2>Book Details</h2>
      {books.map((book) => (
        <div key={book.id} style={{ marginBottom: '10px'}}>
          <b>{book.bname}</b><br />
          <b>{book.price}</b>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
