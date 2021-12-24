import React from "react";
import { useSelector } from "react-redux";
import Book from '../components/Book/Book';
import PageLayout from "../components/PageLayout/PageLayout";

const FinishedBooks = () => {
  const books = useSelector(state => state.books.finishedList)
  return (
      <PageLayout>
            {
              books.length>0 ?
                books.map((book) => (<Book key={book.id} book={book} />)) : <p style={{textAlign:'center'}}>No Books Found</p>
            }
        </PageLayout>
  );
};

export default FinishedBooks;
