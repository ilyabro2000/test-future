import React from 'react';
import SearchForm from '../UI/SearchFrom/SearchForm';
import classes from './Header.module.css';

const Header = () => {
  const categoriesOptions = [
    'all',
    'art',
    'biography',
    'computers',
    'history',
    'medical',
    'poetry',
  ];
  const sortOptions = [
    'relevance',
    'newest',
  ];

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Search for books</h1>
      <SearchForm/>
      <div className={classes.filter}>
        <div className={classes.selectWrapper}>
          <h6 className={classes.selectTitle}>Categories</h6>
          <select className={classes.select}>
            {categoriesOptions.map((option) => <option key={option} >{option}</option>)}
          </select>
        </div>
        <div className={classes.selectWrapper}>
          <h6 className={classes.selectTitle}>Sorting by</h6>
          <select className={classes.select}>
            {sortOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
