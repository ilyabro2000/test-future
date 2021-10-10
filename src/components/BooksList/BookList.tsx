import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/librarySlice';
import BookItem from '../BookItem/BookItem';
import classes from './BookList.module.css';

const BookList = () => {
  const { books, totalItems } = useSelector((state: RootState) => state.libraryInfo);
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
      </div>
    </div>
  );
};

export default BookList;
