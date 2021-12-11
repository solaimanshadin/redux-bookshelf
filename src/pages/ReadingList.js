import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout/PageLayout';

const ReadingList = () => {
    return (
        <PageLayout>
             <p>Looks like you've finished all your books! Check them out in your <Link to="finish">finished books</Link> or <Link to="/">discover more</Link>.</p>
        </PageLayout>
    );
};

export default ReadingList;