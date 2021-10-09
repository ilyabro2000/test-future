/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { libraryState } from '../types/types';

const initialState: libraryState = {
  books: [],
  maxBooks: 30,
  categories: 'all',
  sortVariant: 'relevance',
  searchString: '',
  bookPage: 'list',
  error: '',
  loading: false,
};

const librarySlice: any = createSlice({
  name: 'libraryInfo',
  initialState,
  reducers: {
    addSearchError: (state, { payload: err }) => {
      state.error = err;
    },
    incrimentAmountOfBooks: (state, { payload: amount }) => {
      state.maxBooks += amount;
    },
    addBooks: (state, { payload: newBooks }) => {
      state.books = newBooks;
    },
    changeCategory: (state, { payload: currentCategory }) => {
      state.categories = currentCategory;
    },
    changeSortVariant: (state, { payload: variant }) => {
      state.sortVariant = variant;
    },
    addQueryString: (state, { payload: searchString }) => {
      state.searchString = searchString;
    },
    switchPage: (state, { payload: value }) => {
      state.bookPage = value;
    },
    swithLoading: (state, { payload: value }) => {
      state.loading = value;
    },
  },
});

export const {
  incrimentAmountOfBooks,
  addBooks,
  changeCategory,
  changeSortVariant,
  addQueryString,
  switchPage,
  addSearchError,
  swithLoading,
} = librarySlice.actions;

export default librarySlice.reducer;
