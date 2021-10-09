/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface libraryState {
  books: any,
  maxBooks: number,
  categories: string,
  sortVariant: string,
  searchString: string,
  bookPage: string,
}

const initialState: libraryState = {
  books: [],
  maxBooks: 30,
  categories: 'all',
  sortVariant: 'relevance',
  searchString: '',
  bookPage: 'list',
};

const librarySlice: any = createSlice({
  name: 'libraryInfo',
  initialState,
  reducers: {
    setInitialState: (state, { payload: books }) => {
      state.books.push(books);
    },
    incrimentAmountOfBooks: (state, { payload: amount }) => {
      state.maxBooks += amount;
    },
    addBooks: (state, { payload: newBooks }) => {
      state.books.push([...newBooks]);
    },
    changeCategory: (state, { payload: currentCategory }) => {
      state.categories = currentCategory;
    },
    changeSortVariant: (state, { payload: variant }) => {
      state.sortVariant = variant;
    },
    addSearchString: (state, { payload: searchString }) => {
      state.searchString = searchString;
    },
    switchPage: (state, { payload: value }) => {
      state.bookPage = value;
    },
  },
});

export const {
  setInitialState,
  incrimentAmountOfBooks,
  addBooks,
  changeCategory,
  changeSortVariant,
  addSearchString,
  switchPage,
} = librarySlice.actions;

export default librarySlice.reducer;
