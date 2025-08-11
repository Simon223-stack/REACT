import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser')) || null;

  function handleLogout(){
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  }

  return (
    <header className="header">
      <div className="container inner">
        <Link to="/" style={{textDecoration:'none',color:'var(--accent)',fontWeight:700}}>HARRIS'STORE</Link>
        <nav className="nav">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/products">Products</NavLink>
          {user && (
            <button onClick={handleLogout} style={{marginLeft:12}} className="btn">Logout</button>
          )}
        </nav>
      </div>
    </header>
  );
}