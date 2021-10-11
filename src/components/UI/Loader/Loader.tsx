import React from 'react';
import classes from './Loader.module.css';
import icon from '../../../assets/icons/book.svg';

const Loader = () => (
  <div className={classes.loaderWrapper}>
    <img src={icon} alt="loader book" className={classes.loader}/>
  </div>
);

export default Loader;
