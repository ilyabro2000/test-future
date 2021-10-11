import React from 'react';
import { useDispatch } from 'react-redux';
import {
  changeCategory,
  changeSortVariant,
} from '../../store/librarySlice';
import SearchForm from '../UI/SearchFrom/SearchForm';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
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

  const categoriesChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    dispatch(changeCategory(newValue));
  };
  const sortByChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    dispatch(changeSortVariant(newValue));
  };

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Search for books</h1>
      <SearchForm/>
      <div className={classes.filter}>
        <div className={classes.selectWrapper}>
          <h6 className={classes.selectTitle}>Categories</h6>
          <select className={classes.select} onChange={categoriesChangeHandler}>
            {categoriesOptions.map((option) => <option key={option} >{option}</option>)}
          </select>
        </div>
        <div className={classes.selectWrapper}>
          <h6 className={classes.selectTitle}>Sorting by</h6>
          <select className={classes.select} onChange={sortByChangeHandler}>
            {sortOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
