import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout/PageLayout'
import Book from '../components/Book/Book'

const FinishedBooks = () => {
  const { FinishedCollection } = useSelector((state) => state.books)

  return (
    <PageLayout>
      {FinishedCollection.length === 0 && (
        <p>
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to the <Link to="/">Discover</Link>{' '}
          page to add books to your list.
        </p>
      )}
      <div>
        {FinishedCollection.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </div>
    </PageLayout>
  )
}

export default FinishedBooks
