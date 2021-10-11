import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/librarySlice';
import BookPage from './components/BookPage/BookPage';
import BookList from './components/BooksList/BookList';
import Header from './components/Header/Header';
import './styles/App.css';

function App() {
  const { bookCardInfo } = useSelector((state: RootState) => state.libraryInfo);
  return (
    <div className="App">
      <Header/>
      { !bookCardInfo ? <BookList /> : <BookPage />}
    </div>
  );
}

export default App;
