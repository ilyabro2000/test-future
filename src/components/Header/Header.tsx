import React from 'react';
import SearchForm from '../UI/SearchFrom/SearchForm';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Search for books</h1>
      <SearchForm/>
    </div>
  );
};

export default Header;
