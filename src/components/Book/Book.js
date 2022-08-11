import React from 'react'
import { HiPlusCircle, HiMinusCircle, HiCheckCircle } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import {
  AddToRedaingList,
  RemoveFromReadingList,
  fineshedreading,
} from '../Redux/action'
import styles from './book.module.css'
import { useSelector } from 'react-redux/es/exports'
const SingleBook = (props) => {
  const { title, author, coverImageUrl, synopsis } = props?.book

  const Despatch = useDispatch()

  const { ReadingCollection } = useSelector((state) => state.books)
  const { FinishedCollection } = useSelector((state) => state.books)

  const isTrue = ReadingCollection.find((book) => book?.id === props.book?.id)
  const isItFinseshed = FinishedCollection.find(
    (book) => book.id === props?.book?.id,
  )
  console.log(ReadingCollection, props?.book?.id, isTrue)
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
      <div className={isItFinseshed ? styles.hiddenDiv : styles.control_icons}>
        {isTrue ? (
          <>
            <HiCheckCircle
              title="Mark as Finish"
              onClick={() => Despatch(fineshedreading(props?.book))}
              className={styles.check_icon}
            />
            <HiMinusCircle
              title="Remove from list"
              onClick={() => Despatch(RemoveFromReadingList(props?.book?.id))}
              className={styles.minus_icon}
            />
          </>
        ) : (
          <HiPlusCircle
            title="Add to Reading"
            onClick={() => Despatch(AddToRedaingList(props?.book))}
            className={styles.plus_icon}
          />
        )}
      </div>
    </div>
  )
}

export default SingleBook
