import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles.css'
import CharactersList from './components/characters';
import BooksList from './components/books';
import MoviesList from './components/movies/movies';
import App from './components/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      {/* <App /> */}
      {/* <BooksList /> */}
      <MoviesList />
      {/* <CharactersList /> */}
    </React.StrictMode>
);
