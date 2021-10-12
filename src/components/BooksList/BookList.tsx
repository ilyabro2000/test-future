import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import {
  RootState,
  addBooks,
  addSearchError,
  switchLoading,
} from '../../store/librarySlice';
import getBooks from '../../API/fetch';
import BookItem from '../BookItem/BookItem';
import { searchData } from '../../types/types';
import classes from './BookList.module.css';
import Loader from '../UI/Loader/Loader';

const BookList = () => {
  const {
    books,
    totalItems,
    categories,
    sortVariant,
    maxBooks,
    startIndex,
    queryString,
    loading,
  } = useSelector((state: RootState) => state.libraryInfo);
  console.log(books);
  const dispatch = useDispatch();
  const loadMoreHandler = () => {
    dispatch(switchLoading(true));
    getBooks(queryString, categories, sortVariant, maxBooks, startIndex + 31)
      .then(({ data }) => {
        const newBooks = data.items.map(({ volumeInfo, id }: searchData) => {
          const body = volumeInfo;
          return { body, id };
        });
        dispatch(addBooks(newBooks));
        dispatch(switchLoading(false));
      })
      .catch((err) => dispatch(addSearchError(err.message)));
  };

  return (
    <div className="container">
      <div className={classes.bookListSection}>
        {
          !books.length
            ? <h3 className={classes.totalResult}>No results</h3>
            : <h3 className={classes.totalResult}>Founded {totalItems} results</h3>
        }
        {
          (loading)
            ? <Loader/>
            : <div className={classes.bookList}>
                {books.map((book: any) => <BookItem book={book} key={_.uniqueId()}/>)}
              </div>
        }
        {books.length
          ? <button type="button" className={classes.loadMoreBtn} onClick={loadMoreHandler}>Load more</button>
          : null
        }
      </div>
    </div>
  );
};

export default BookList;
