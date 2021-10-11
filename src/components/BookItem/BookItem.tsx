import React, { FC } from 'react';
import classes from './BookItem.module.css';
import { ibook } from '../../types/types';

interface BookItemProps {
  book: ibook;
}

const BookItem: FC<BookItemProps> = ({ book }) => {
  const getAuthors = (authors: string[]) => {
    if (authors.length > 1) return authors.join(', ');
    return authors[0];
  };
  console.log(book);
  return (
    <div className={classes.bookItem}>
      <div className={classes.imageWrapper}>
        {book.imageLinks
          ? <img src={book.imageLinks.smallThumbnail} alt="amage book" className={classes.bookImage}/>
          : null}
      </div>
      <div className={classes.bookBody}>
        {book.categories ? <p className={classes.category}>{book.categories[0]}</p> : null}
        {book.title ? <p className={classes.title}>{book.title}</p> : null}
        {book.authors ? <p className={classes.authors}>{getAuthors(book.authors)}</p> : null}
      </div>
    </div>
  );
};
export default BookItem;
