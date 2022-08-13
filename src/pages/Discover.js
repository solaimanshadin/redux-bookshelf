import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Book from '../components/Book/Book'
import PageLayout from '../components/PageLayout/PageLayout'
import { LoadData } from '../components/redux/BookSlice'
import { useDispatch } from 'react-redux/es/exports'
const Discover = () => {
  const Dispatch = useDispatch()
  useEffect(() => {
    Dispatch(LoadData())
  }, [Dispatch])

  const Descover = useSelector((state) => state.books.DiscoverCollection)

  return (
    <PageLayout>
      {Descover.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </PageLayout>
  )
}

export default Discover
