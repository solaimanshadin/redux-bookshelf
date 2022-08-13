import React from 'react'
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux/es/exports'
const Sidebar = () => {
  const ReadingList = useSelector((state) => state.books.ReadingCollection)
  const FinishedList = useSelector((state) => state.books.FinisheBookCollection)

  return (
    <div className="col-md-3">
      <ul className="list-group sticky-top  py-2">
        <NavLink as="li" className="list-group-item" to="/" exact>
          Discover
        </NavLink>
        <NavLink as="li" className="list-group-item" to="/reading">
          Reading List{' '}
          <span className="badge badge-sm bg-primary">
            {' '}
            {ReadingList.length}
          </span>
        </NavLink>
        <NavLink as="li" className="list-group-item" to="/finish">
          Finished Books{' '}
          <span className="badge badge-sm bg-primary">
            {FinishedList.length}
          </span>
        </NavLink>
      </ul>
    </div>
  )
}

export default Sidebar
