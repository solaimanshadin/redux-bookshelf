import React, { useEffect } from "react";
import Book from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/slices/bookSlice";
const Discover = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchBooks())
  },[])

  const books = useSelector((state) => state.books.discover);
  return (
    <PageLayout>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </PageLayout>
  );
};

export default Discover;
