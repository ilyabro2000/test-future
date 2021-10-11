import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, addMoreBooks, addSearchError } from '../../store/librarySlice';
import getBooks from '../../API/fetch';
import BookItem from '../BookItem/BookItem';
import { searchData } from '../../types/types';
import classes from './BookList.module.css';

const BookList = () => {
  const {
    books,
    totalItems,
    categories,
    sortVariant,
    maxBooks,
    startIndex,
    queryString,
  } = useSelector((state: RootState) => state.libraryInfo);
  const dispatch = useDispatch();

  const loadMoreHandler = () => {
    console.log(maxBooks);
    getBooks(queryString, categories, sortVariant, maxBooks, startIndex + 30)
      .then(({ data }) => {
        const newBooks = data.items.map((item: searchData) => item.volumeInfo);
        dispatch(addMoreBooks(newBooks));
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
        <div className={classes.bookList}>
          {books.map((book: any) => <BookItem book={book} key={book.title}/>)}
        </div>
        {books.length
          ? <button type="button" className={classes.loadMoreBtn} onClick={loadMoreHandler}>Load more</button>
          : null
        }
      </div>
    </div>
  );
};

export default BookList;
