import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addSearchError,
  addBooks,
  switchLoading,
  addQueryString,
  RootState,
  setTotalItems,
  addBookCardInfo,
} from '../../../store/librarySlice';
import icon from '../../../assets/icons/search_black_24dp.svg';
import classes from './SearchForm.module.css';
import { searchData } from '../../../types/types';
import getBooks from '../../../API/fetch';

const SearchForm = () => {
  const [queryString, setQueryString] = useState('');
  const dispatch = useDispatch();
  const {
    categories,
    sortVariant,
    maxBooks,
    startIndex,
  } = useSelector((state: RootState) => state.libraryInfo);

  const sendQuery = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addBookCardInfo(null));
    dispatch(switchLoading(true));
    dispatch(addQueryString(queryString));
    if (!queryString) return;
    getBooks(queryString, categories, sortVariant, maxBooks, startIndex)
      .then(({ data }) => {
        const books = data.items.map(({ volumeInfo, id }: searchData) => {
          const body = volumeInfo;
          return { body, id };
        });
        dispatch(addBooks(books));
        dispatch(addQueryString(queryString));
        dispatch(setTotalItems(data.totalItems));
        dispatch(switchLoading(false));
      })
      .catch((err) => dispatch(addSearchError(err.message)));
    setQueryString('');
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
