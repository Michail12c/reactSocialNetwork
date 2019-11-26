import React from 'react';
import c from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
	return (
      <header className={c.header}>
      <img src='https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg'/>
      <div className = {c.loginBlock}>
      { props.isAuth ? props.login : <NavLink to ='/login'>Login</NavLink>}
      </div>
    </header>
	)
}

export default Header;