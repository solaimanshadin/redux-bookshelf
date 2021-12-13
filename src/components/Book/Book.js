import React from "react";
import {
  HiCheckCircle, HiOutlineCheck,
  HiOutlineMinus,
  HiPlusCircle
} from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { AddToFinishedList, AddToReadingList, RemoveFromReadingList } from "../../redux/actions/bookActions";
import styles from './book.module.css';
const SingleBook = (props) => {
  const dispatch = useDispatch()
  const { title, author, coverImageUrl, synopsis, id } = props.book;  
  
  const readingList = useSelector(state => state.books.readingList)
  const matchId = readingList.find(book => book.id === id)
  return (
    <div className='card d-flex mb-3 p-3' 
      style={{position: 'relative'}}
    >
      <div className='row'>
        <div className='col-md-3'>
          <img className="img-fluid" src={coverImageUrl} alt='' />
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6>{author}</h6>
            <p className='card-text'>{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons} >
       
        {
          props?.discover && ( matchId ? <HiOutlineCheck title="Added To Reading List" className={styles.minus_icon} /> : <HiPlusCircle onClick={()=> dispatch(AddToReadingList(props.book))} title="Add to Reading" className={styles.plus_icon} />)
        }
        {
          props?.reading && <HiOutlineMinus onClick={()=> dispatch(RemoveFromReadingList(id))} title="Remove From Reading List" className={styles.minus_icon} />
        }
        { 
        props?.reading && <HiCheckCircle onClick={() => dispatch(AddToFinishedList(props.book))} title="Mark as Finish" className={styles.check_icon} /> 
        }
      </div>
    </div>
  );
};

export default SingleBook;
