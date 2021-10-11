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
  bookCardInfo: null | object,
}
export interface searchData {
  items: [],
  volumeInfo: object,
  totalItems: string,
  id: string,
}
export interface ibook {
  body: {
    authors: [],
    categories: string[],
    imageLinks: {
      thumbnail: string,
    },
    title: string,
  }
}