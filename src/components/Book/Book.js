import React from "react";
import { 
  HiPlusCircle, 
  HiMinusCircle,
  HiCheckCircle 
} from 'react-icons/hi';
import { useDispatch } from "react-redux";
import { BookAddAction, BookAddFinishlistAction, BookRemoveAction } from "../../Redux/Action/Bookaction";
import styles from './book.module.css'
const Book = (props) => {
  const { title, author, coverImageUrl, synopsis,id } = props.book;
  const list = props.list
  const finishlist = props.finishlist
  const dispatch = useDispatch()

 
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
        { finishlist ||  <>{
          list ? <><HiMinusCircle onClick={() => dispatch(BookRemoveAction(id))} title="Remove from list" className={styles.minus_icon} />
          <HiCheckCircle onClick={() => {
            dispatch(BookAddFinishlistAction(props.book));
            dispatch(BookRemoveAction(id))
          }} title="Mark as Finish" className={styles.check_icon} />
          </> 
          :   <HiPlusCircle onClick={() => dispatch(BookAddAction(props.book))} title="Add to Reading" className={styles.plus_icon} />
        }</>}
      
        
      </div>
    </div>
  );
};

export default Book;
