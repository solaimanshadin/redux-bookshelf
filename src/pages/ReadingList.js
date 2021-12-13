import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";
import Book from "../components/Book/Book";
import { useSelector } from "react-redux";

const ReadingList = () => {
  const discover = useSelector((state) => state.books.readingList);

  return (
    <PageLayout>
      {discover.length === 0 ? (
        <p>
          Looks like you've finished all your books! Check them out in your{" "}
          <Link to="finish">finished books</Link> or{" "}
          <Link to="/">discover more</Link>.
        </p>
      ) : (
        discover.map((book) => (
          <Book key={book.id} book={book} iconCondition={"addToFinish"} />
        ))
      )}
    </PageLayout>
  );
};

export default ReadingList;
