import { Outlet, useLoaderData } from "react-router-dom";

const Book = () => {

    const book = useLoaderData();

  return (
    <div className="container mt-5">
      <h1>{book.title}</h1>
      <p className="text-muted">{book.genre}</p>
      <p className="fw-bold">{book.author}</p>
      <p className="blockquote">{book.description}</p>
      <Outlet 
        context={book}
      />
    </div>
  )
}

export default Book;