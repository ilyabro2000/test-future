import React, { FC } from 'react';
import classes from './BookItem.module.css';
import { ibook } from '../../types/types';
import defaultCover from '../../assets/icons/default_cover_book.svg';

interface BookItemProps {
  book: ibook;
}

const BookItem: FC<BookItemProps> = ({ book }) => {
  const getAuthors = (authors: string[]) => {
    if (authors.length > 1) return authors.join(', ');
    return authors[0];
  };
  const { body } = book;
  return (
    <div className={classes.bookItem}>
      <div className={classes.imageWrapper}>
        {body.imageLinks
          ? <img src={body.imageLinks.smallThumbnail} alt="amage book" className={classes.bookImage}/>
          : <img src={defaultCover} alt="amage book" className={classes.bookImage}/>}
      </div>
      <div className={classes.bookBody}>
        {body.categories ? <p className={classes.category}>{body.categories[0]}</p> : null}
        {body.title ? <p className={classes.title}>{body.title}</p> : null}
        {body.authors ? <p className={classes.authors}>{getAuthors(body.authors)}</p> : null}
      </div>
    </div>
  );
};
export default BookItem;
