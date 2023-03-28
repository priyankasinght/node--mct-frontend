import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='main-navbar-container'>
      <Link className='navbar-link' to='/Home'>Home</Link>
      <Link className='navbar-link' to='/Product'>Product</Link>
      <Link className='navbar-link' to='/User'>Users</Link>
      <Link className='navbar-link' to='/Contact'>Contact</Link>
      <Link className='navbar-link' to='/'>Log Out</Link>
    </div>
  )
};

export default Navbar;