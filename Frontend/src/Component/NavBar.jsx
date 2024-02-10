import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <React.Fragment>
        <nav className='navbar navbar-dark bg-dark navbar-expand-sm d-flex justify-content-end'>
                <Link to={'/'} className='btn btn-primary m-2 me-3'>HOME</Link>
                <Link to={'/home/userlist'} className='btn btn-primary m-2 me-3'>User List</Link>
                <Link to={'/home/companylist'} className='btn btn-primary m-2 me-3'>Company List</Link>
                <Link to={'/home/clientform'} className='btn btn-primary m-2 me-5'>Update User</Link>
        </nav>
    </React.Fragment>
  )
}

export default NavBar
