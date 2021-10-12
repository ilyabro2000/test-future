import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, addBookCardInfo } from '../../store/librarySlice';
import classes from './BookPage.module.css';
import defaultCover from '../../assets/icons/default_cover_book.svg';
import cancel from '../../assets/icons/cancel.svg';

const BookPage = () => {
  const { bookCardInfo } = useSelector((state: RootState) => state.libraryInfo);
  const dispatch = useDispatch();
  const getString = (data: string[]) => {
    if (data.length > 1) return data.join(', ');
    return data[0];
  };

  const exitBookPageHandler = () => {
    dispatch(addBookCardInfo(null));
  };
  return (
    <div className={classes.bookPage}>
      <div className="container">
        <div className={classes.bookPageContent}>
          <div className={classes.imageWrapper}>
            {bookCardInfo.imageLinks
              ? <img src={bookCardInfo.imageLinks.medium || bookCardInfo.imageLinks.thumbnail} alt="amage book" className={classes.bookImage}/>
              : <img src={defaultCover} alt="amage book" className={classes.bookImage}/>}
          </div>
          <div className={classes.bookInfo}>
            <img src={cancel} alt="cencel" onClick={exitBookPageHandler} className={classes.cancelBtn}/>
            {bookCardInfo.categories
              ? <p className={classes.category}>{getString(bookCardInfo.categories)}</p>
              : null}
            {bookCardInfo.title
              ? <p className={classes.title}>{bookCardInfo.title}</p>
              : null}
            {bookCardInfo.authors
              ? <p className={classes.authors}>{getString(bookCardInfo.authors)}</p>
              : null}
            {bookCardInfo.description
              ? <p className={classes.description}>{bookCardInfo.description}</p>
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
