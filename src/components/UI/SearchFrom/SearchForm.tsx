import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  addSearchError,
  addBooks,
  swithLoading,
  addQueryString,
  setTotalItems,
} from '../../../store/librarySlice';
import icon from '../../../assets/icons/search_black_24dp.svg';
import classes from './SearchForm.module.css';
import { searchData } from '../../../types/types';

const SearchForm = () => {
  const [queryString, setQueryString] = useState('');
  const dispatch = useDispatch();
  const sendQuery = (e: React.MouseEvent) => {
    dispatch(swithLoading(true));
    dispatch(addQueryString(queryString));
    e.preventDefault();
    if (!queryString) return;
    axios.get<searchData>(`https://www.googleapis.com/books/v1/volumes?q=${queryString}`)
      .then(({ data }) => {
        const books = data.items.map((item: searchData) => item.volumeInfo);
        dispatch(addBooks(books));
        dispatch(setTotalItems(data.totalItems));
      })
      .catch((err) => dispatch(addSearchError(err)));
    setQueryString('');
    dispatch(swithLoading(false));
  };

  return (
    <form className={classes.form}>
      <input
        type="text"
        placeholder="Search ..."
        className={classes.input}
        value={queryString}
        onChange={(e) => setQueryString(e.target.value)}
      />
      <button type="submit" className={classes.btn} onClick={sendQuery}>
        <img src={icon} alt="search icon"/>
      </button>
    </form>
  );
};

export default SearchForm;
