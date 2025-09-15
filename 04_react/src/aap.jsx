import { useState, useEffect } from "react";

export const App = () => {
  const [Books, setBooks] = useState([]);
  const [Error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.data) {
          setBooks(data.data.data);
        } else {
          setError("No books found");
        }
      })
      .catch(() => setError("Failed to load"));
  }, [])


  return (
    <div>
      <h1>Welcome to chaicode</h1>
      <p>Serving hot chai with react</p>

      {Error && <h2>{Error}</h2>}

      <ul>
        {Books.map((book) => (
          <li key={book.id}>
            {book.volumeInfo?.title} — {book.volumeInfo?.authors?.join(", ")} 
          </li>

        ))}
      </ul>
    </div>
  );

}