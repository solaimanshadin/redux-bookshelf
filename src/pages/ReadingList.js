import React from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout/PageLayout'
import { useSelector } from 'react-redux/es/exports'
import Book from '../components/Book/Book'

const ReadingList = () => {
  const Books = useSelector((state) => state.books.ReadingCollection)
  console.log(Books)
  return (
    <PageLayout>
      {Books.length === 0 && (
        <p>
          Looks like you've finished all your books! Check them out in your{' '}
          <Link to="finish">finished books</Link> or{' '}
          <Link to="/">discover more</Link>.
        </p>
      )}
      <div>
        {Books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </PageLayout>
  )
}

export default ReadingList
