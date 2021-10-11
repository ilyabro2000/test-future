import axios from 'axios';

const addCategory = (category: string): string => ((category !== 'all') ? `+subject:${category}` : '');

const getBooks = (
  query: string,
  category: string,
  sort: string,
  maxBooks: number,
  startIndex: number,
): Promise<any> => (
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}${addCategory(category)}`, {
    params: {
      orderBy: sort,
      maxResults: maxBooks,
      startIndex,
    },
  })
);

export default getBooks;
