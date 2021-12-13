import React from 'react';
import { HiPlusCircle } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';

const ReadingList = () => {
    const readinglistbook = useSelector((state) => state.books.readinglist)
    let list = false ;
    if(readinglistbook.length > 0)
    {
        list = true
    }
    console.log(readinglistbook)
    return (
        <PageLayout>
            {
                readinglistbook.length === 0 && <p>Looks like you've finished all your books! Check them out in your <Link to="finish">finished books</Link> or <Link to="/">discover more</Link>.</p>
            }
    
            {
                readinglistbook.map((book) => (<Book key={book.id} list={list} book={book} />))
            }
        
        </PageLayout>
    );
};

export default ReadingList;