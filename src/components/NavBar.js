import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className = 'nav'>
      <a  href= '/' classname = 'site-title'>SESweb</a>
        
        <ul className = 'navbar-links'>
            <li><Link to= "/">Home</Link></li>
            <li><Link to = '/Dashboard'> Dashboard </Link></li>
            <li><Link to = '/StudentInfo'> Student Info </Link></li>
            <li><Link to = '/Registration'> Registration </Link></li>

        </ul>
      
    </nav>
  )
}

export default NavBar