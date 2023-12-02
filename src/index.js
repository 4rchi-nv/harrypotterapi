import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles.css'
import MoviesList from './components/movies/movies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <MoviesList />
    </React.StrictMode>
);
