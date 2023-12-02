import React, { useState, useEffect} from "react";

const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('https://api.potterdb.com/v1/books');
                if(!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const dataset = await response.json();
                const {data} = dataset;
                console.log(data);
                setBooks(data);
            }
            catch(error) {
                console.error(error.message);
            }
        }
        fetchBooks();
    }, []);

    return (
        <div>
          <h1>Harry Potter Books</h1>
            {books.map((book) => (
              <div key={book.id} className="book-card">
                <div className="book-details">
                  <h2>{book.attributes.title}</h2>
                  <p>House: {book.attributes.summary}</p>
                  {/* Add more details as needed */}
                </div>
              </div>
            ))}
        </div>
      );

};
export default BooksList;