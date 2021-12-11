import React from 'react';
import Book from '../components/Book/Book';
import books from '../fakeData/books.json'
import PageLayout from '../components/PageLayout/PageLayout';
const Discover = () => {
    return (
        <PageLayout>
            {
                books.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;