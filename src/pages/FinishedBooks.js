import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Book from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";

const FinishedBooks = () => {
  const finishlistbook = useSelector((state) => state.books.finishedbook)
  let finishlist = true
  if(finishlistbook.length > 0)
  {
    finishlist = false
  }
  console.log(finishlistbook)
  return (
    <PageLayout>
          {
                finishlistbook.length === 0 && <p>Looks like you've finished all your books! Check them out in your <Link to="finish">finished books</Link> or <Link to="/">discover more</Link>.</p>
            }
    
            {
                finishlistbook.map((book) => (<Book key={book.id} finishlist={finishlist} book={book} />))
            }
        
    </PageLayout>
  );
};

export default FinishedBooks;
