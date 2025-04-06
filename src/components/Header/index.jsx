import { NavLink } from 'react-router-dom';
import React from 'react'
import "./header.scss"

const Header = () => {
  return (
    <header>
     {/* Logo */}
     <h2>İş Takip</h2>

     {/* Nav */}
     <nav>
       <NavLink to="/">İş Listesi</NavLink>
       <NavLink to="/create">İş Ekle</NavLink>
     </nav>
    </header>
  )
}

export default Header;
