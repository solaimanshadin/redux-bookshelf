import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const readingList = useSelector(state => state.books.readingList)
  const finishedList = useSelector(state => state.books.finishedList)
  return (
    <div className='col-md-3'>
      <ul className='list-group sticky-top  py-2'>
        <NavLink as='li' className='list-group-item' to='/' exact>
          Discover
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/reading'>
          Reading List <span className='badge badge-sm bg-primary'>{readingList.length >0 ? readingList.length : 0 }</span>
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/finish'>
          Finished Books <span className='badge badge-sm bg-primary'>{finishedList.length >0 ? finishedList.length : 0 }</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
