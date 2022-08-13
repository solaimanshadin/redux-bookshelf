import React from 'react'
import { HiPlusCircle, HiMinusCircle, HiCheckCircle } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import styles from './book.module.css'
import {
  AddtoReadingList,
  RemoveFromReadingList,
  FinishedBook,
} from '../redux/BookSlice'
const SingleBook = (props) => {
  const Dispatch = useDispatch()

  const { title, author, coverImageUrl, synopsis } = props?.book

  const ReadingList = useSelector((state) => state.books.ReadingCollection)
  const FinishedList = useSelector((state) => state.books.FinisheBookCollection)

  const isSelected = ReadingList.find((book) => book.id === props.book.id)
  const isFinished = FinishedList.find((book) => book.id === props.book.id)

  return (
    <div className="card d-flex mb-3 p-3" style={{ position: 'relative' }}>
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid" src={coverImageUrl} alt="" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6>{author}</h6>
            <p className="card-text">{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>

      <div className={isFinished ? styles.hiddenDiv : styles?.control_icons}>
        {isSelected ? (
          <>
            <HiCheckCircle
              onClick={() => Dispatch(FinishedBook(props.book))}
              title="Mark as Finish"
              className={styles.check_icon}
            />
            <HiMinusCircle
              onClick={() => Dispatch(RemoveFromReadingList(props.book))}
              title="Remove from list"
              className={styles.minus_icon}
            />
          </>
        ) : (
          <HiPlusCircle
            onClick={() => Dispatch(AddtoReadingList(props.book))}
            title="Add to Reading"
            className={styles.plus_icon}
          />
        )}
        ,
      </div>
    </div>
  )
}

export default SingleBook
