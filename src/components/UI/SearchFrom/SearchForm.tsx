import React from 'react';
import icon from '../../../assets/icons/search_black_24dp.svg'
import classes from './SearchForm.module.css'

const SearchForm = () => {
  return (
    <form className={classes.form}>
      <input
        type="text"
        placeholder="Search ..."
        className={classes.input}
      />
      <button type="submit" className={classes.btn}>
        <img src={icon} alt="search icon"/>
      </button>
    </form>
  );
};

export default SearchForm;
