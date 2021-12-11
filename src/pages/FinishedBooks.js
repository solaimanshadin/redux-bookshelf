import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";

const FinishedBooks = () => {
  return (
    <PageLayout>
      <p>
        Hey there! This is where books will go when you've finished reading
        them. Get started by heading over to the <Link to='/'>Discover</Link>{" "}
        page to add books to your list.
      </p>
    </PageLayout>
  );
};

export default FinishedBooks;
