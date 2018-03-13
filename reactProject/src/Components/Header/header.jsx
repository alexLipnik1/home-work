import React from 'react';
import styles from './header.css';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = () => (
    <div className={styles._header}>
        <NavLink className={styles.btn} to="/login">login</NavLink>
        <Link className={styles.btn} to="/register">Register</Link>
        <Link className={styles.btn} to="/homePage">homePage</Link>
        {/* <Link to="/myStore">store</Link> */}
    </div>
);

export default Header;