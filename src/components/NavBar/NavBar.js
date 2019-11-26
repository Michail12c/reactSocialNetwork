import React from 'react';
import classes from './NavBar.module.css';
import {NavLink}  from 'react-router-dom';

const Navbar = () => {
	return(
      <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.activ}`}>
       <NavLink to = '/profile' activeClassName = {classes.activLink}>Profile</NavLink> 
      </div>
      <div className={classes.item}>
       <NavLink to ='/dialogs' activeClassName = {classes.activLink}>Messages</NavLink> 
      </div>
            <div className={classes.item}>
       <NavLink to ='/users' activeClassName = {classes.activLink}>Users</NavLink> 
      </div>
      <div className={classes.item}>
       <NavLink to = '/news' activeClassName = {classes.activLink}>News</NavLink> 
      </div>
      <div className={classes.item}>
       <NavLink to ='/music' activeClassName = {classes.activLink}>Music</NavLink> 
      </div>
      <div className={classes.item}>
       <a>Settings</a> 
      </div>
    </nav>
	)
}

export default Navbar;