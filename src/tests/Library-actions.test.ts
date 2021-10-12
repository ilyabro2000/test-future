import reducer, {
  incrimentAmountOfBooks,
  addBooks,
  changeCategory,
  changeSortVariant,
  addQueryString,
  switchPage,
  addSearchError,
  switchLoading,
  setTotalItems,
  setStartIndex,
  addBookCardInfo,
  deleteState,
} from '../store/librarySlice';

const state = {
  books: [],
  maxBooks: 30,
  categories: 'all',
  sortVariant: 'relevance',
  searchString: '',
  bookPage: 'list',
  error: '',
  loading: false,
  totalItems: 0,
  startIndex: 0,
  bookCardInfo: null,
};

it('added books', () => {
  const newState = reducer(state, addBooks([{book: 1}, {book: 2}]));
  expect(newState.books).toEqual([{book: 1}, {book: 2}]);
});
it('added to the total result', () => {
  const newState = reducer(state, setTotalItems(100));
  expect(newState.totalItems).toEqual(100);
});
it('changed category', () => {
  const newState = reducer(state, changeCategory('biography'));
  expect(newState.categories).toEqual('biography');
});
it('added max value of books', () => {
  const newState = reducer(state, incrimentAmountOfBooks(30));
  expect(newState.maxBooks).toEqual(60);
});
it('changed sort variant', () => {
  const newState = reducer(state, changeSortVariant('newest'));
  expect(newState.sortVariant).toEqual('newest');
});
it('added query string', () => {
  const newState = reducer(state, addQueryString('miu'));
  expect(newState.searchString).toEqual('miu');
});
it('switched page', () => {
  const newState = reducer(state, switchPage('book'));
  expect(newState.bookPage).toEqual('book');
});
it('added search error', () => {
  const newState = reducer(state, addSearchError('error'));
  expect(newState.error).toEqual('error');
});
it('switched loading', () => {
  const newState = reducer(state, switchLoading(true));
  expect(newState.loading).toEqual(true);
});
it('set start index', () => {
  const newState = reducer(state, setStartIndex(10));
  expect(newState.startIndex).toEqual(10);
});
it('added book card info', () => {
  const newState = reducer(state, addBookCardInfo({ title: 'book', id: '1' }));
  expect(newState.bookCardInfo).toEqual({ title: 'book', id: '1' });
});
it('delete state books', () => {
  const newState = reducer(state, deleteState());
  expect(newState.books).toEqual([]);
});
it('add and delete books', () => {
  const stateAfterAdding = reducer(state, addBooks([{book: 1}, {book: 2}]));
  const stateAfterDeleting = reducer(stateAfterAdding, deleteState());
  expect(stateAfterDeleting.books).toEqual([]);
});