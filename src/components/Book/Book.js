import React from "react";
import {
  HiPlusCircle,
  HiMinusCircle,
  HiCheckCircle,
  HiOutlineCheck,
} from "react-icons/hi";
import styles from "./book.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToReadingList,
  removeFromReadingList,
  addToFinishedList,
} from "../../redux/actions/bookAction";
import { useLocation } from "react-router-dom";
const SingleBook = (props) => {
  const { title, author, coverImageUrl, synopsis } = props.book;
  const dispatch = useDispatch();
  const { readingList } = useSelector((state) => state.books);
  const { finishedList } = useSelector((state) => state.books);
  const existInReadingList = readingList.find(
    (book) => book.id === props.book.id
  );
  const existInFinishedList = finishedList.find(
    (book) => book.id === props.book.id
  );
  const location = useLocation();
  return (
    <div className="card d-flex mb-3 p-3" style={{ position: "relative" }}>
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid" src={coverImageUrl} alt="" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6>{author}</h6>
            <p className="card-text">{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons}>
        {readingList.length && location.pathname === "/reading" ? (
          <React.Fragment>
            <HiMinusCircle
              onClick={() => dispatch(removeFromReadingList(props.book.id))}
              title="Remove from list"
              className={styles.minus_icon}
            />
            {!existInFinishedList ? (
              <HiCheckCircle
                onClick={() => dispatch(addToFinishedList(props.book))}
                title="Mark as Finish"
                className={styles.check_icon}
              />
            ) : (
              <HiOutlineCheck style={{ pointerEvents: "none" }} />
            )}
          </React.Fragment>
        ) : !existInReadingList &&
          !existInFinishedList &&
          location.pathname !== "/finish" ? (
          <HiPlusCircle
            onClick={() => dispatch(addToReadingList(props.book))}
            title="Add to Reading"
            className={styles.plus_icon}
          />
        ) : (
          <HiOutlineCheck style={{ pointerEvents: "none" }} />
        )}
      </div>
    </div>
  );
};

export default SingleBook;
