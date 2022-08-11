import React from 'react'
import Book from '../components/Book/Book'
import PageLayout from '../components/PageLayout/PageLayout'
import { useSelector } from 'react-redux/es/exports'
const Discover = () => {
  const Books = useSelector((state) => state.books.DescoverCollection)

  return (
    <PageLayout>
      {Books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </PageLayout>
  )
}

export default Discover
