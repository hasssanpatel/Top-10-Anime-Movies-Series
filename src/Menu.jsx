import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <>
      <h1>Here are the Top 10 Anime Movies Series</h1>
      <nav className="menu">
        <NavLink to="/Anime" className={({ isActive }) => (isActive ? 'active_class' : '')}>
          Anime
        </NavLink>
        <NavLink to="/Series" className={({ isActive }) => (isActive ? 'active_class' : '')}>
          Series
        </NavLink>
        <NavLink to="/Movies" className={({ isActive }) => (isActive ? 'active_class' : '')}>
          Movies
        </NavLink>
      </nav>
    </>
  );
}

export default Menu;
