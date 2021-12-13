import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";
import Book from "../components/Book/Book";

const ReadingList = () => {
  const { readingList } = useSelector((state) => state.books);
  return (
    <PageLayout>
      {!readingList.length ? (
        <p>
          Hey! this is your reading list for the books.Check them in{" "}
          <Link to="/">discover more</Link>.
        </p>
      ) : (
        readingList.map((book) => <Book key={book.id} book={book} />)
      )}
    </PageLayout>
  );
};

export default ReadingList;
