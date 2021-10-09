export interface libraryState {
  books: any,
  maxBooks: number,
  categories: string,
  sortVariant: string,
  searchString: string,
  bookPage: string,
  error: string,
  loading: boolean,
}
export interface searchData {
  items: [],
  volumeInfo: object
}