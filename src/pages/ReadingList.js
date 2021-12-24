import React from 'react';
import { useSelector } from 'react-redux';
import Book from "../components/Book/Book";
import PageLayout from '../components/PageLayout/PageLayout';

const ReadingList = () => {
    const readingList = useSelector(state => state.books.readingList)
    
    return (
        <PageLayout>
            {
                readingList.length>0 ?
                readingList.map((book) => (<Book key={book.id} book={book} reading={true} />)): <p style={{textAlign:'center'}}>No Books Found</p>
            }
        </PageLayout>
    );
};

export default ReadingList;