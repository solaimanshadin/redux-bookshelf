import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book/Book';

import PageLayout from '../components/PageLayout/PageLayout';
const Discover = () => {
    const discover = useSelector((state) => state.books.discover) 
    return (
        <PageLayout>
            {
                discover.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;