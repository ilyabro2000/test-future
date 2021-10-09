import React from 'react';
import { useDispatch } from 'react-redux';
import { setInitialState } from './store/librarySlice';
import Header from './components/Header/Header';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
