import React from 'react';
import { useDispatch } from 'react-redux';
import BookList from './components/BooksList/BookList';
import Header from './components/Header/Header';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <BookList />
    </div>
  );
}

export default App;
