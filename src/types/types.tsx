export interface libraryState {
  books: any,
  maxBooks: number,
  categories: string,
  sortVariant: string,
  searchString: string,
  bookPage: string,
  error: string,
  loading: boolean,
  totalItems: number,
  startIndex: number,
}
export interface searchData {
  items: [],
  volumeInfo: object,
  totalItems: string,
}
export interface ibook {
  authors: [],
  categories: string[],
  imageLinks: {
    smallThumbnail: string,
  },
  title: string,
}