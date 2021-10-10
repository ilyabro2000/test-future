import React, { FC } from 'react';
import classes from './BookItem.module.css';
import { ibook } from '../../types/types';

interface BookItemProps {
  book: ibook;
}

const BookItem: FC<BookItemProps> = ({ book }) => (
  <div className={classes.bookItem}>
    <div className={classes.imageWrapper}>
      <img src={book.imageLinks.smallThumbnail} alt="amage book" className={classes.bookImage}/>
    </div>
    <div className={classes.bookBody}>
      <p className={classes.category}>
        {book.categories[0]}
      </p>
      <p className={classes.title}>
        {book.title}
      </p>
      <p className={classes.authors}>
        {book.authors.join(', ')}
      </p>
    </div>
  </div>
);
export default BookItem;
